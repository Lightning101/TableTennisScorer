import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreBoardControllerComponent } from './pages/score-board-controller/score-board-controller.component';
import { ScoreBoardComponent } from './pages/score-board/score-board.component';
import { ControllerGaurdService } from './pages/gaurds/controller-gaurd.service';



const routes: Routes = [
  { path: 'contoller', component: ScoreBoardControllerComponent, canActivate:[ControllerGaurdService]},
  { path: 'scoreboard', component: ScoreBoardComponent},
  { path: '',
    redirectTo: '/scoreboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
