import { Injectable } from '@nestjs/common';
import {db} from '../db/db-connector/db-connector';
import { employee } from '../db/schema/employee';
import { department } from 'src/db/schema/department';
import { manager } from 'src/db/schema/manager';
import { projects } from 'src/db/schema/projects';
import { eq } from 'drizzle-orm';
 

@Injectable()
export class UsersService {
    async addProjects(data: { project_id: string; project_name: string; team_member_id: string }) {
        await db.insert(projects).values(data).execute();
    }
    async addManager(data: { manager_id: string; manager_name: string; dept_id: string }) {
        await db.insert(manager).values(data).execute();
    }
    async addDepatment(data: { dept_id: string; dept_name: string }) {
        await db.insert(department).values(data).execute(); 
    }
    async addEmployee(data: { emp_id: string; emp_name: string; dept_id: string; manager_id: string }) {
        await db.insert(employee).values(data).execute();
    }

    async getEmployeeDetails(){
        return await db
        .select({
            employeeName: employee.emp_name,
            departmentName: department.dept_name,
            managerName: manager.manager_name,
            projectName: projects.project_name,
        })
        .from(employee)
        .leftJoin(department,eq(employee.emp_id,department.dept_id))
        .innerJoin(manager, eq(employee.manager_id,manager.manager_id))
        .innerJoin(projects, eq(employee.emp_id,projects.team_member_id))
        .execute();
    }
}

