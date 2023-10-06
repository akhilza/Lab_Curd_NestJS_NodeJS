import { LabDto } from './dto/lab.dto';
import { LabService } from './lab.service';
export declare class LabController {
    private readonly labService;
    constructor(labService: LabService);
    labLab(res: any, labDto: LabDto): Promise<any>;
    getLab(response: any, labUsername: string): Promise<any>;
}
