import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { product } from '../modules/Test';


@Component({
  selector: 'app-meals',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {
  allProducts : product[]=[
    {pName:"Pizza",PPrice:10,pCat:"Food",pImag:"/images/759351.jpg"},
    {pName:"Pizza",PPrice:10,pCat:"Food",pImag:"/images/759351.jpg"},
    {pName:"Pizza",PPrice:10,pCat:"Food",pImag:"/images/759351.jpg"},
    {pName:"Pizza",PPrice:10,pCat:"Food",pImag:"/images/759351.jpg"},
    {pName:"Pizza",PPrice:10,pCat:"Food",pImag:"/images/759351.jpg"},

  ]
}
