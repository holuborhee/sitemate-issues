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
  create(createIssueDto: CreateIssueDto) {
    const newIssue = this.issueRepository.create(createIssueDto);
    return this.issueRepository.save(newIssue);
  }

  findAll() {
    return `This action returns all issues`;
  }

  findOne(id: number) {
    return `This action returns a #${id} issue`;
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    return `This action updates a #${id} issue`;
  }

  remove(id: number) {
    return `This action removes a #${id} issue`;
  }
}
