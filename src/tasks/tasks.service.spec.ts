import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TaskStatus } from './task-status.enum';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
});

const mockUser = {
    username: 'Anupam',
    id: 'someId',
    password: 'somepassword',
    tasks: [],
};

describe ('TasksService' , () => { 
    let tasksService: TasksService;
    let tasksRepository;

    beforeEach(async() => {
      // initialize a nestjs module with tasksService and tasksRepository
      const module = await Test.createTestingModule({
          providers: [
            TasksService,
          { provide: TasksRepository, useFactory: mockTaskRepository },
          ],
      }).compile();

      tasksService = module.get(TasksService)
      tasksRepository = module.get(TasksRepository);
    });

    describe('getTasks', () => {
        it('calls TaskRepository.getTasks and returns the result', async() => {
          //expect(tasksRepository.getTasks).not.toHaveBeenCalled(); 
          // call tasksService.getTasks, which should then call the repository's getTasks
          tasksRepository.getTasks.mockResolvedValue('someValue');
          const result = await tasksService.getTasks(null, mockUser);
          //expect(tasksRepository.getTasks).toHaveBeenCalled();   
          expect(result).toEqual('someValue')
        })
    })

    describe('getTaskById', () => {
        it('calls TasksRepository.findOne and returns the result', async() => {
        const mockTask = {
            title:  'Test Title',
            description: 'Test Desc',
            id: 'someId',
            status: TaskStatus.OPEN,
        };

        tasksRepository.findOne.mockResolvedValue(mockTask);
        const result = await tasksService.getTaskById('someId', mockUser);
        expect(result).toEqual(mockTask);
        });

        it('calls TasksRepository.findOne and handles the error', async() => {
            tasksRepository.findOne.mockResolvedValue(null);
            expect(tasksService.getTaskById('someId', mockUser)).rejects.toThrow(NotFoundException);
        });
    });
});