import { CommonModule } from "@angular/common";
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "../../service/productservice";
import { DialogModule } from "primeng/dialog";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { RatingModule } from "primeng/rating";
import { OrderListModule } from "primeng/orderlist";
import { RadioButtonModule } from "primeng/radiobutton";
import { ToolbarModule } from "primeng/toolbar";
import { DonorListComponent } from "./donor-list.component";
import { TagModule } from "primeng/tag";

@NgModule({
    declarations:[DonorListComponent],
    providers:[ProductService,ConfirmationService],
    imports:[CommonModule,FormsModule ,DialogModule,ButtonModule,TableModule,ReactiveFormsModule,FormsModule,RadioButtonModule,
        ToastModule,DropdownModule,
        InputNumberModule,
        RatingModule
        ,ToolbarModule
        ,TagModule,
        ConfirmDialogModule,],
    exports:[DonorListComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DonorListModule{}