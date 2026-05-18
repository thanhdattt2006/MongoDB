import { Injectable } from "@nestjs/common";
import { Student } from "./entities/student.entities";

@Injectable()
export class StudentService{
    private students: Student[];
    constructor(){
        this.students=[
            {
                id:1,
                name:'Student 1',
                math: 6,
                physic: 5.7,
                chem: 9
            },
            {
                id:2,
                name:'Student 2',
                math: 9,
                physic: 6.5,
                chem: 7
            },
            {
                id:3,
                name:'Student 3',
                math: 8,
                physic: 5.6,
                chem: 7.5
            },
            {
                id:4,
                name:'Student 4',
                math: 8.8,
                physic: 7.9,
                chem: 6.8
            }
        ]
    }

    findAll() {
        return this. students;
    }

    findById(id:number) {
        return this. students.find(s => s.id == id);
    }

    /*
    Xay dung web api thuc hien cac yeu cau sau:
    1.Tinh diem trung binh cua 1 svien theo cthuc
        dtb=(toan*3+ly*2+hoa)/6
    2.Xep loai svien dua tren dtb:
        Neu dtb >=8 => A
        Neu dtb >=7 => B
        Neu dtb >=6 => C
        Nguoc lai => D
    3.Liet ke cac svien co dtb nam trong khoang tu min den max
    */

    //1.Tinh diem trung binh cua 1 svien theo cthuc
    avg(a:number,b:number,c:number){
        return (a*3+b*2+c)/6
    }

    //2.Xep loai svien dua tren dtb:
    rank(a:number,b:number,c:number){
        if(this.avg(a,b,c)>=8){
            return 'A'
        }else if(this.avg(a,b,c)>=7){
            return 'B'
        }else if(this.avg(a,b,c)>=6){
            return 'C'
        }else{
            return 'D'
        }
    }

    //3.Liet ke cac svien co dtb nam trong khoang tu min den max
    
}