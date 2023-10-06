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
exports.LabService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const lab_1 = require("./schema/lab");
const mongoose_2 = require("mongoose");
let LabService = class LabService {
    constructor(lab) {
        this.lab = lab;
    }
    async createLab(data) {
        return await new this.lab(data).save();
    }
    async getLabByUsername(username) {
        const existingLab = await this.lab.findOne({ username }).exec();
        if (!existingLab) {
            throw new common_1.NotFoundException(`Lab By Username #${existingLab} not found`);
        }
        return existingLab;
    }
};
LabService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lab_1.Lab.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LabService);
exports.LabService = LabService;
//# sourceMappingURL=lab.service.js.map