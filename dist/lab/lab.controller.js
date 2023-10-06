"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabController = void 0;
const common_1 = require("@nestjs/common");
const lab_dto_1 = require("./dto/lab.dto");
const lab_service_1 = require("./lab.service");
let LabController = class LabController {
    constructor(labService) {
        this.labService = labService;
    }
    async labLab(res, labDto) {
        try {
            const newLab = await this.labService.createLab(labDto);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Lab created successfully',
                newLab,
            });
        }
        catch (err) {
            console.error(err);
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Lab not created!',
                error: 'Bad Request',
            });
        }
    }
    async getLab(response, labUsername) {
        try {
            const existingLab = await this.labService.getLabByUsername(labUsername);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Lab found successfully',
                existingLab,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, lab_dto_1.LabDto]),
    __metadata("design:returntype", Promise)
], LabController.prototype, "labLab", null);
__decorate([
    (0, common_1.Get)('getLab/:username'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LabController.prototype, "getLab", null);
LabController = __decorate([
    (0, common_1.Controller)('lab'),
    __metadata("design:paramtypes", [lab_service_1.LabService])
], LabController);
exports.LabController = LabController;
//# sourceMappingURL=lab.controller.js.map