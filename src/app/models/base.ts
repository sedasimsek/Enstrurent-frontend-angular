import { Time } from "@angular/common";
import { LiteralPrimitive } from "@angular/compiler";

export interface Base{
    id:number
    CreatedAt:Time
    UpdatedAt:Time
    DeletedAt:Time
}