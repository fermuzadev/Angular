import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'first-angular-app';
  public videoList:Array<any> = []

  ngOnInit(): void {
    this.videoList = [
      {
        title: 'Video 1',
        subtitle: 'Subtitle video 1',
        img:'https://i.ytimg.com/vi/QCuhEKFWhxY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiHMOWL2IScjDKSWNBgD77wgnNMw'
      },
      {
        title: 'Video 2',
        subtitle: 'Subtitle video 2',
        img:'https://i.ytimg.com/vi/HtKqSJX7VoM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChz-Sie9rhtm0lrh5x-aJj4fnHcQ'
      },
      {
          title: 'Video 3',
          subtitle: 'Subtitle video 3',
          img:'https://i.ytimg.com/vi/VVsrFFG-6NI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTf_TkGpTwoVqxYewdJ3DpMPmvCg'
      }
    ]
  }
}
