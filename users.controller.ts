import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    //employees
    @Post('add-employee')
    async addEmployee(@Body() body:{emp_id:string,emp_name:string , dept_id:string , manager_id:string}){
        return this.userService.addEmployee(body);
    }
    
    //department
    @Post("add-department")
    async addDepatment(@Body()body:{dept_id:string , dept_name:string}){
        return this.userService.addDepatment(body);
    }

    //manager
    @Post("add-manager")
    async addManager(@Body()body:{manager_id:string , manager_name:string , dept_id:string}){
        return this.userService.addManager(body);
    }

    //projects
    @Post("add-projects")
    async addProjects(@Body()body:{project_id:string , project_name:string , team_member_id:string}){
        return this.userService.addProjects(body);
    }

    @Get("employee-details")
    async getEmployeedetails(){
        return this.userService.getEmployeeDetails();
    }
}
