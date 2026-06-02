import { Expose, Transform } from "class-transformer";
import moment from 'moment';
import { getImageUrl } from "src/util/config.util";

export class ProductDTO {

    @Expose()
    @Transform(({obj}) => obj._id.toString())
    id: string;

    @Expose()
    @Transform(({obj}) => obj.name)
    name: string;

    @Expose()
    price: number;

    @Expose()
    quantity: number;

    @Expose()
    status: boolean;

    @Transform(({obj}) => obj.status ? 'Show' : 'Hide')
    @Expose()
    status2: string;

    @Transform(({obj}) => moment(obj.createdAt).format('DD/MM/YYYY'))
    @Expose()
    createdAt: Date

    @Expose()
    colors: string[];

    @Expose()
    brand: any;

    @Transform(({obj}) => getImageUrl() + obj.photo)
    @Expose()
    photo: string;

    @Expose()
    categoryId: string;

}