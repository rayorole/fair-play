export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  link?: string;
  linkText?: string;
  references?: Array<{ text: string; url: string }>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "player-workload-and-football-sustainability",
    title: "Player Workload and Football Sustainability",
    excerpt:
      "Lately, I have noticed how often top football players are asked to play. I believe the consequences might undermine the sport and are already doing so...",
    content: `Lately, I have noticed how often top football players are asked to play. I believe the consequences might undermine the sport and are already doing so. The governing body FIFA, along with other organisations, seems more focused on staging as many tournaments as possible rather than on players' health and performance. According to FIFPRO , more than half of the 1500 monitored top players faced excessive workload in 2023 and 2024, with many logging more than 55 games. Many of those players who were selected to play in the World Cup did not get a proper offseason to recover before a new competition began. This is not good for players, as it can lead to fatigue, injuries, and burnout. I believe treating the players fairly is an important part of football, not only on the pitch but off the pitch as well. To the fans who would say that they don't care as long as matches are being played, think about this. If the players are fatigued or injured because of the workload, tired players will make more mistakes, become less sharp, and have less energy; this is a recipe for disaster for the teams. This is a logical reason as to why they should get more time off. Here is a reason from a human perspective: I feel that, as a fan of the sport, you should also realise that the people you see on the pitch are not machines but also humans with limits. If we want this sport to continue, we as a whole need to bring change to the schedule, even if that means fewer matches are being played, the quality of the matches will increase, and we will not be treating the players like sock puppets for our entertainment.`,
    date: "2025-01-15",
    link: "https://www.fifpro.org/en/articles/2025/09/without-minimum-protection-for-player-health-and-performance-football-remains-global-outlier-among-elite-sports-fifpro-report-shows",
    linkText:
      "New FIFPRO Player Workload Report Outlines Continuing Threats To Player Health And Performance",
  },
  {
    slug: "transfer-market-inflation",
    title: "Transfer Market Inflation",
    excerpt:
      "Every transfer these days feels more ridiculous than the last. I remember 5 years ago, it was shocking when a player was sold for $100 million, and it was big news, but now it's practically normal...",
    content: `Every transfer these days feels more ridiculous than the last. I remember 5 years ago, it was shocking when a player was sold for $100 million, and it was big news, but now it's practically normal. I think the football transfer market is getting out of control; soon, they will be spending billions of dollars for players inflated by billionaire owners, state-backed clubs, and desperation from teams trying to keep up. Take the team Al-Nassr, for example, a team started by billionaires in Saudi-Arabia, a team that has plenty of money to throw around and buy the best players. Another part I find crazy is how young some of the expensive signings are. Clubs are spending 60 to 80 million dollars on players who haven't even completed 2 full seasons. I understand investing in young talent is smart, but sometimes it seems like teams are just gambling their entire budget on potential, and this is how clubs get into financial trouble. Being a good player is not about talent on its own; they won't get far without proper training, but if teams spend all their budget on the transfer, they have no more money to properly train the player they bought. Not to mention, when players earn $400k a week, expectations are high and can sometimes become unrealistic, and when these expectations aren't met, people can turn toxic. Some players might feel immense pressure to exceed or even meet those expectations because they get treated more like investments than people. The inflation of players also comes with other problems, such as the gap between the rich and the poor. When rich clubs constantly buy players for more than $100 million, poor clubs can't compete because they can't buy or keep any players. The moment a player has a few really good seasons and is a standout player, the giant rich teams swarm and spend hundreds of millions of dollars to buy the player because the poor clubs can't possibly refuse such offers. If this keeps happening, the outcome of matches will become increasingly more predictable, and there will be no more fun in the game. Football used to be about making smart investments in players now it sometimes just becomes a bidding war between a player who played better than usual in a few matches. The article below shows how the mid-year transfer window has hit an all-time high.`,
    date: "2025-01-20",
    link: "https://inside.fifa.com/transfer-system/media-releases/global-transfer-market-new-all-time-highs-2025-mid-year-window",
    linkText:
      "Global Transfer Market Hits New All-time Highs in 2025 Mid-year Window",
  },
  {
    slug: "the-soul-of-football",
    title: "The Soul of Football",
    excerpt:
      "I am a fan of football, the spectacle, the matches, and the excitement of watching your favorite team win. However, sometimes I worry that we might be losing sight of what makes football, football...",
    content: `I am a fan of football, the spectacle, the matches, and the excitement of watching your favorite team win. However, sometimes I worry that we might be losing sight of what makes football, football. The things that also come to mind when I think about football are the fans, chanting through the stadium because they are excited. This feeling is unbeatable; it makes you feel at home. The connection between fans of the same team is also what makes this sport enjoyable, and I think some of the merch selling and marketing can sometimes break that connection. I have had times where I've seen someone wearing a shirt from my favorite team, and when I started talking to them, and our conversation steered towards football, it hit me, this guy doesn't know anything about football. Selling merch and marketing is a good way for teams to make money, of course, but at what point does it go too far, where people are wearing the shirts without even knowing what they are wearing? I think this could kill the feeling of belonging between fans of a team in the long run. Right now, this still isn't a big problem yet, but in the future, this could become one, and if it kills the connection between people, it is not good for football. Teams should be aware of this, but I don't think they are. Clubs are held together by the fans. Clubs could start protecting that, keeping affordable tickets for matches, and encouraging people to come see matches instead of just buying merchandise. Things like these could be more valuable long term, as you have more fans who will regularly come and see matches as opposed to someone who just buys a shirt once and never again. As you can see, it is not only in the best interest of the fans to keep that feeling of belonging, but also in the best interest of the teams as they will earn more money and be able to keep their team afloat.`,
    date: "2025-01-25",
    link: "https://boardroom.tv/most-popular-soccer-jerseys-2023/",
    linkText: "Most Popular Soccer Jerseys 2023",
  },
  {
    slug: "jupiler-pro-league-new-rules",
    title: "The Jupiler Pro League's New Rules: Progress or Overreach",
    excerpt:
      "The Jupiler Pro League's changes this season are like someone opening a window in a somewhat stale room. Yes, There's fresh air, but there's also a sudden gust that knocks some papers off the table...",
    content: `The Jupiler Pro League's changes this season are like someone opening a window in a somewhat stale room. Yes, There's fresh air, but there's also a sudden gust that knocks some papers off the table. The introduction of the semi-automated offside line, the new 8-second goalkeeper role and a revised competition structure have been reshaped Belgian football overnight.

Objectively speaking, the Pro League has confirmed several major innovations since July 2024. Using limb-tracking data to expedite decisions, the semi-automated offside technology is similar to what FIFA implemented during the 2022 World Cup (Pro League, 2024). The rule limiting goalkeepers to eight seconds of holding the ball is meant to increase match tempo (Pro League, 2024). Meanwhile the 18-team league and adjusted calendar aim to align Belgian football with border European trends.

Cleaner and more reliable refereeing is something I applaud as a fan. One of football's enduring momentum killers is offside delays and the new system promises speedier decisions. I also appreciate a faster game; too many matches last season felt stuck in slow motion as keepers milked every pause.

But I'm not without hesitation. The beauty of football has always existed in the space between its flaws. I am concerned that too many technological interventions could sterilise that emotion volatility. Smaller clubs may also find it difficult to meet the operational and financial demands of edge-cutting technology which could increase rather than decrease the competitive gap.

Ultimately I think these changes can be positive if the league ensures they serve the game rather than overshadow it. Modernisation should make football more accessible rather than mechanical.`,
    date: "2025-02-01",
    link: "https://www.proleague.be",
    linkText: "Pro League - What's new in season 2024–2025?",
  },
  {
    slug: "europe-new-competition-formats",
    title: "Europe's New Competition Formats: More goals or More Inequality?",
    excerpt:
      'UEFA\'s structural changes to European competitions, especially the shift from traditional groups to an expanded league-style "Swiss" format, have sparked intense debate. To be honest I am conflicted...',
    content: `UEFA's structural changes to European competitions, especially the shift from traditional groups to an expanded league-style "Swiss" format, have sparked intense debate. To be honest I am conflicted. Part of me thrills at the idea of more high-stakes matches while another part senses a creeping imbalance beneath the spectacle.

Such format modifications may influence team behavior according to recent analytical research. A 2025 modelling study found teams in an incomplete round-robin format tend to adopt more attacking strategies because the new point-distribution dynamic rewards offensive risk-taking more than conservative play (Pauly & Szymanski, 2025). According to UEFA the reform will result in "more competitive matches and greater sporting fairness" (UEFA, 2023).

From a viewer's standpoint I enjoy attacking football; it lifts the game like someone nudging open the curtains on a cloudy afternoon. Yet the sport is more than entertainment; it is also a system of values. If reforms quietly consolidate power at the top then the game becomes predictable and predictability is the enemy of football's soul. In the end I see UEFA's changes as a mixed blessing: exciting in theory yet fragile in practice. I hope future evaluations focus not only on revenue and spectacle but also on competitive integrity.`,
    date: "2025-02-05",
    link: "https://www.uefa.com",
    linkText: "UEFA - Club competition format changes",
    references: [
      {
        text: "Pauly, M., & Szymanski, S. (2025). Strategic behaviour under incomplete round-robin formats. arXiv.",
        url: "https://www.arxiv.org/abs/2509.13141",
      },
      {
        text: "UEFA. (2023). UEFA club competition format changes.",
        url: "https://www.uefa.com",
      },
    ],
  },
  {
    slug: "football-modernisation-identity-loss",
    title: "Football's Modernisation: Improvement or Identity Loss?",
    excerpt:
      "Today's football is more commercialised, polished and wired than it has ever been. On some days it seems like the sport is racing forward with neon boots and satellite-guided passes but on other days it feels like the muddy flawed heartbeat that first made the game unique is fading.",
    content: `Today's football is more commercialised, polished and wired than it has ever been. On some days it seems like the sport is racing forward with neon boots and satellite-guided passes but on other days it feels like the muddy flawed heartbeat that first made the game unique is fading.

The Pro League's renewed broadcast agreements and the use of high-precision technology in Belgium, such as improved VAR tools and smart balls, reflect a larger worldwide trend (Pro League, 2024). Football revenue has increased dramatically on a global scale and in its most recent financial landscape study UEFA reported that the combined revenue of European clubs was nearly €10 billion (UEFA, 2024)

Yet I cannot help feeling uneasy at times. Community stories risk being overshadowed when football is viewed primarily as a product. Smaller clubs rooted in local neighbourhoods rather than overseas investment portfolios may find it difficult to remain competitive. Technology enhances fairness yet it can also create emotional distance. A goal once celebrated instantly is now sometimes followed by cautious glances toward a screen.

For me, the rituals - the walk in the stadiums, the cold night air and the chants that feel right even when they do not sync perfectly - remain the essence of football. I am not against innovation; I just hope it does not drain the sport of its humanity.

Progress is welcome. Still, identity matters. The challenge is to let football evolve without letting it drift away from the people who built it.`,
    date: "2025-02-10",
    link: "https://www.uefa.com",
    linkText: "UEFA - European Club Footballing Landscape Report",
    references: [
      {
        text: "Pro League. (2024). What's new in season 2024–2025?",
        url: "https://www.proleague.be",
      },
      {
        text: "UEFA. (2024). European Club Footballing Landscape Report.",
        url: "https://www.uefa.com",
      },
    ],
  },
  {
    slug: "why-xg-is-most-important-metric",
    title:
      "The stats don't lie: Why xG is the most important metric you're ignoring",
    excerpt:
      'You watch a match, your team has 20 shots, the opponent has 2, and you end up with a frustrating 1-1 draw. Sounds familiar? We all scream at the TV about wasted chances, but how do we actually "prove" who was the better team? Enter Expected Goals (xG).',
    content: `Alright, let's talk. You watch a match, your team has 20 shots, the opponent has 2, and you end up with a frustrating 1-1 draw. Sounds familiar? We all scream at the TV about wasted chances, but how do we actually "prove" who was the better team? Enter Expected Goals (xG). This isn't just another fancy stat for nerds like me; its the closest thing we have to quantifying the truth of a football match.

For the initiated, xG measures the quality of a chance. Every shot is assigned a value between 0 and 1 based on factors like distance, angle, and body part, showing the probability of it being a goal. A tap-in might be 0.9 xG, a screamer from 30 meters out might be 0.04. It cuts through the noise. As the experts at Stats perform explain, xG evaluates every shot based on historical data from hundreds of thousands of attempts, giving a crystal-clear picture of which team created better opportunities. Your team might have lost 1-0 to a fluke penalty, but if your xG was 2.8 and their 0.6, you can be confident the process was right and the results will follow.

People complain it takes the romance out of the game. I call nonsense. It "adds" depth. When our star striker goes five games without a goal, do we call him a flop? Or do we check the data? If he's consistently underperforming his xG it might just be a temporary slump. If he's not getting any chances, that's a system problem. The Athletic performance team at Training Ground Guru highlights how clubs like Liverpool use this data to track player performance beyond the scoreboard, identifying underlying trends that aren't visible to the naked eye.

For a tech guy like me, this is the future. We're building algorithms that process terabytes of tracking data to make xG models even more accurate. It's no longer about a scout's gut feeling; it's about data-informed decisions. So next time you're debating a match with your friends, don't just look at the scoreline. Look at the xG plot. It's the story of the game, written in data, and it's rarely wrong.`,
    date: "2025-02-15",
    references: [
      {
        text: "Stats Perform - Expected Goals (xG) Explained",
        url: "https://www.statsperform.com",
      },
      {
        text: "Training Ground Guru - How Liverpool use data analytics",
        url: "https://trainingground.guru",
      },
    ],
  },
  {
    slug: "var-buggy-mess-software-update",
    title: "VAR is a buggy mess, and it needs a software update, not a referee",
    excerpt:
      "I'm sitting here, watching another game being stopped for five minutes while a referee stares at a screen. The crowd is silent, the players are confused, and the eventual decision still feels wrong. The Video Assistant Referee (VAR) was supposed to eliminate controversy, but it just repackaged it with a loading symbol.",
    content: `I'm sitting here, watching another game being stopped for five minutes while a referee stares at a screen. The crowd is silent, the players are confused, and the eventual decision still feels wrong. The Video Assistant Referee (VAR) was supposed to eliminate controversy, but it just repackaged it with a loading symbol. The problem? We're treating it like a perfect system instead of what it is: a clunky piece of software with terrible user experience.

From my perspective as a developer, VAR's fundamental flaw isn't the technology. It's the implementation. The rules it's trying to enforce, like the "clear and obvious error" standard for offside, are essentially a binary function. A player is either onside or offside. There is no "clear and obvious" in code: it's true or false. Yet, we use human-drawn lines on pixels, introducing a margin of error that the system's logic isn't designed to handle? The International Football Association Board (IFAB) itself acknowledges these challenges, noting that the use of VAR for offside has been a primary source of frustration and confusion.

The user flow is a disaster. The fans in the stadium, the most important stakeholders, are left completely in the dark. There's no audio, no real-time insight into what's being checked. It's like using an app that freezes without a loading bar: you have no idea if it's working or broken. A report by The Athletic surveyed fans and found that a significant majority feel VAR has made watching football less enjoyable, citing a lack of communication and prolonged delays as the main reasons.

The solution isn't to scrap VAR. It's to refactor it. First, implement semi-automated offside technology with AI-tracked lines, like they used in the 2022 World Cup, to remove the slow, manual drawing. Second, mic up the referees and broadcast the conversation, like in rugby. This adds accountability and drama. We need to stop seeing VAR as an all-knowing oracle and start treating it like a tool. And every good developer knows: a tool is only as good as its interface. Right now, the interface is broken.`,
    date: "2025-02-20",
    references: [
      {
        text: "IFAB - VAR Protocol and Guidelines",
        url: "https://www.theifab.com",
      },
      {
        text: "The Athletic - VAR Fan Survey",
        url: "https://theathletic.com",
      },
    ],
  },
  {
    slug: "data-scientist-next-star-signing",
    title:
      "From the pitch to the cloud: why your club's next star signing is a data scientist",
    excerpt:
      'For years, football clubs spent millions based on a scout\'s hunch, a highlight reel, or because a player had a "good World Cup". It was inefficient, expensive, and frankly, a terrible way to manage a multi-million euro asset. Then came Moneyball, and everything changed.',
    content: `For years, football clubs spent millions based on a scout's hunch, a highlight reel, or because a player had a "good World Cup". It was inefficient, expensive, and frankly, a terrible way to manage a multi-million euro asset. Then came Moneyball, and everything changed. But we've moved far beyond just counting goals and assists. The real revolution is happening in the cloud, and your club's future success depends on it.

Modern clubs are drowning in data. GPS trackers, optical tracking cameras: they generate petabytes of information on player movement, pass velocity, and tactical shapes. The challenge isn't collecting it; it's making sense of it. This is where Data Scientists and cloud architects become almost as crucial as the head coach. They build the pipelines that take this raw data, process it on scalable cloud platforms and turn it into actionable insights. A landmark case study by AWS details how Bundesliga club VfL Wolfsburg built a cloud-based analytics platform that helps their coaching staff make faster, more informed tactical decisions during live matches.

Think about it. We can now build machine learning models that don't just tell you if a striker is good, but if he's the "right" striker for your manager's specific pressing system. We can analyze an opponent's defensive shape and identify a "passing lane vulnerability" that a human eye might miss over 90 minutes. This is what clubs like Brighton & Hove Albion have mastered; their data-driven recruitment model, which leans heavily on advanced analytics, is widely credited for their incredible success in the Premier League.

As a student of Applied Informatics, this is a dream. The beautiful game is becoming a complex, data-rich ecosystem. The clubs that win tomorrow aren't just the ones who can pay the biggest transfer fees; they're the ones with the most robust data infrastructure, the smartest algorithms, and the best tech talent. So next time your club signs a random player you've never heard of, don't rage on twitter. Check the underlying data. The geeks in the back room have probably already crunched the numbers.`,
    date: "2025-02-25",
    references: [
      {
        text: "AWS - VfL Wolfsburg Cloud Analytics Case Study",
        url: "https://aws.amazon.com",
      },
      {
        text: "Brighton & Hove Albion - Data-Driven Recruitment Model",
        url: "https://www.brightonandhovealbion.com",
      },
    ],
  },
  {
    slug: "var-fairness-or-frustration",
    title: "VAR: Fairness or Frustration?",
    excerpt:
      "As a football fan, I thought VAR would solve anything, no more handgoals, no more offside goals, no more injustice. But after watching several games of teams like Real Madrid, Barcelona and some others I'm not so sure this is the right way.",
    content: `As a football fan, I thought VAR would solve anything, no more handgoals, no more offside goals, no more injustice. But after watching several games of teams like Real Madrid, Barcelona and some others I'm not so sure this is the right way. VAR should make football easier but it's creating as many problems as it's solving.

Objectively speaking, VAR was introduced to help referees in crucial match situations like goals and red cards and statistically VAR has improved referees accuracy to 99% correct decision. Now it's just the players that decide the game not the referee which is great.

However, as a viewer the VAR feels too much, every goal is getting checked for the smallest error, those decisions take so long and every game is getting added 10 minutes of extra time which kills the flow of the game. What I also hate for example is the offside rule where goals are being disallowed because of 2 millimeters, I don't think anyone is benefitting from these 2 millimeters but still a lot of goals are being disallowed.

My biggest frustration is the human element. VAR doesn't eliminate subjectivity, it just moves the subjectivity to a room full of people staring at a screen. As the BBC reported, even VAR teams admit to "human error" in high profile games like Mancity vs Newcastle. If the technology is supposed to end controversy, why are we still discussing every decision after every game?

Still I don't think VAR should be gone, it's a great addition but it has to be modified, clearer protocols, faster work and more communication. Fair play should feel fair, not mathematical.`,
    date: "2025-03-01",
    references: [
      {
        text: "BBC Sport. (2024). Newcastle 2-1 Mancity: Should Pep Guardiola have been awarded a penalty?",
        url: "https://www.bbc.com/sport/football/articles/ce8617ryprro",
      },
      {
        text: "FIFA. Video Assistant Referee (VAR) technology.",
        url: "https://inside.fifa.com/innovation/standards/video-assistant-referee/video-assistant-referee-technology",
      },
      {
        text: "New Scientist. (2024). The real reason VAR infuriates football fans and how to fix it.",
        url: "https://www.newscientist.com/article/2454587-the-real-reason-var-infuriates-football-fans-and-how-to-fix-it/#:~:text=VAR%20controversies,for%20stray%20toenails%20and%20armpits",
      },
    ],
  },
  {
    slug: "racism-in-football",
    title: "Racism: The Threat to Fair Play",
    excerpt:
      "Every time I am in a football stadium and there are racist chants I am disgusted. Football is a global sport that is bringing together a lot of people from different backgrounds, yet racism is one of the only threats to fair play at this moment.",
    content: `Every time I am in a football stadium and there are racist chants I am disgusted. Football is a global sport that is bringing together a lot of people from different backgrounds, yet racism is one of the only threats to fair play at this moment.

Despite having different campaigns against racism such as UEFA's "No to Racism" have been running for years or clubs criticizing racism as it's also bad for them when they are having sanctions about it. However, these campaigns have not been working, UEFA reports show that racist incidents continue to rise.

One issue is that those sanctions are often too weak, a money price or some fans not coming to the next match won't affect the clubs that much, to have it really have an impact the sanctions have to be stronger.

What worries me even more is how players feel, people like Lukaku who are constantly being shouted at and then other players like Vinicius Junior that are challenging people and then calling it racism when people say something to him. At this stage of the world, a lot of hate and racism is being spread on the internet and a lot of players feel discriminated according to FIFpro. Fair play also means protecting the players and this is not happening.

I believe football should respond more aggressively. Points deductants, stadium bans and stricter monitoring of online hate should be standard. Racism won't go away by itself, and we all have to work together to make it work!`,
    date: "2025-03-05",
    references: [
      {
        text: "FIFPRO. (2023). Understanding racism in European football culture.",
        url: "https://www.fifpro.org/en/articles/2023/06/understanding-racism-in-european-football-culture",
      },
      {
        text: "UEFA. (2024). Tackling racism in European football.",
        url: "https://www.uefa.com/news-media/news/028b-1a765eca983c-8c19960f23bb-1000--tackling-racism-in-european-football/",
      },
      {
        text: "ESPN. (2023). Romelu Lukaku representatives urge action after striker subjected to racist abuse at Juventus.",
        url: "https://www.espn.com/soccer/story/_/id/38680950/romelu-lukaku-representatives-urge-action-striker-subjected-racist-abuse-juventus",
      },
    ],
  },
  {
    slug: "time-wasting-in-football",
    title: "Time Wasting: Unfair Tactic or Clever Strategy?",
    excerpt:
      "There is nothing I hate more in football than time wasting, taking ages to throw in a ball, goal kick or making substitutions in the last minute of the game. As a fan, it feels unfair but is time wasting actually unfair or is it just a clever tactic?",
    content: `There is nothing I hate more in football than time wasting, taking ages to throw in a ball, goal kick or making substitutions in the last minute of the game. As a fan, it feels unfair but is time wasting actually unfair or is it just a clever tactic?

The facts show that time wasting affects matches the most, it kills the pace of the game. In most of the high level games there is only 55-60 minutes (CIES Football Observatory, 2025) actually played out of the 90. That means a huge amount of the time is gone by delays. No wonder fans get frustrated.

At the same time, I understand why teams would do it. For example in the game Belgium vs France in 2018 in the World Cup, Belgium was scary every time they got the ball so France had to make sure they took their time to not give Belgium the ball. At that time I was really frustrated and I hated France for it but now I understand that it's just a tactic to eliminate games.

Still, I think football is meant to be played and not be stalled. That's why I support introducing pure time like in basketball. When the ball is out, the time pauses. This would solve this problem for good but then a match might take too long, but it would make matches more honest.

The recent changes to adding more stoppage times is a positive start, in 2018-2020 there was always around 2 minutes extra added while now it can be 7-10 minutes. This is just a compensation for time wasting but it doesn't eliminate it.

If football truly values fair play, they should look into this.`,
    date: "2025-03-10",
    references: [
      {
        text: "CIES Football Observatory. (2025). Effective playing time: records per league and club.",
        url: "https://www.cies.ch/cies/news/news-detail/article/effective-playing-time-records-per-league-and-club",
      },
      {
        text: "BBC Sport. (2024). Will a stopped clock end time-wasting in football?",
        url: "https://www.bbc.com/sport/football/articles/cj41ge0yg0jo",
      },
      {
        text: "BBC Sport. (2024). Reinventing football: How new rules would change the way football is.",
        url: "https://www.bbc.com/sport/football/articles/cly98r7en94o",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
