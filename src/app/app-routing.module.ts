import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElasticSearchComponent } from "./pages/elastic-search/elastic-search.component";
import { TempComponent } from "./temp/temp.component";
// tennis
import { TournamentComponent } from "./pages/tournament/tournament.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { CalendarComponent } from "./pages/calendar/calendar.component";
import { RankingsComponent } from "./pages/rankings/rankings.component";
import { H2hComponent } from "./pages/h2h/h2h.component";
import { HomeComponent } from "./pages/home/home.component";
import { MatchesComponent } from "./pages/matches/matches.component";
import { H2hListComponent } from "./pages/h2h-list/h2h-list.component";



const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HomeComponent, path: 'tennis' },
  { component: MatchesComponent, path: 'tennis/matches' },
  { component: H2hListComponent, path: 'tennis/h2h' },
  { component: TournamentComponent, path: ':discipline/tournaments/:type/:tournament/:year', },
  { component: ProfileComponent, path: 'tennis/profile/:name', },
  { component: CalendarComponent, path: 'tennis/calendar', },
  { component: RankingsComponent, path: 'tennis/rankings' },
  { component: H2hComponent, path: 'tennis/h2h/:type/:playerOne/:playerTwo' },
  // { component: MatchesComponent, path: 'tennis/h2h/:type/:playerOne/:playerTwo' },
  { component: ElasticSearchComponent, path: 'tennis/elastic-search' },
  { component: TempComponent, path: 'tennis/temp' },





  { component: NotFoundComponent, path: '404' },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
