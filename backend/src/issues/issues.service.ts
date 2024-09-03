import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Issue } from './entities/issue.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IssuesService {
  constructor(
    @InjectRepository(Issue)
    private issueRepository: Repository<Issue>,
  ) {}
  async create(createIssueDto: CreateIssueDto) {
    let newIssue = this.issueRepository.create(createIssueDto);
    newIssue = await this.issueRepository.save(newIssue);
    console.log(newIssue)
    return newIssue
  }

  findAll() {
    return this.issueRepository.find();
  }

  findOne(id: number) {
    return this.issueRepository.findOneBy({id});
  }

  async update(id: number, updateIssueDto: UpdateIssueDto) {
    const toUpdate = await this.issueRepository.findOneBy({id});

    let message = ""
    if(toUpdate) {
      await Object.assign(toUpdate, updateIssueDto)
      await this.issueRepository.save(toUpdate)
      message = `Updating issue with id: ${id}`
    } else {
      message = "Nothing to update"
    }

    console.log(message)
    return message;
  }

  async remove(id: number) {
    const toRemove = await this.issueRepository.findOneBy({id});

    let message = ""
    if(toRemove) {
      await this.issueRepository.remove(toRemove);
      message = `Deleting issue with id: ${id}`
    } else {
      message = "Nothing to delete"
    }

    console.log(message)
    return message;
  }
}
