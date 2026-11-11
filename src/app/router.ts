import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        // The colon (:) in the path indicates that id is a route parameter. The value of this parameter will be available to the DetailsComponent when it is activated.
        // it is a placeholder for the parameter value that will be passed in the URL when navigating to this route. For example, if the user navigates to /details/1, the value of the id parameter will be 1.
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;