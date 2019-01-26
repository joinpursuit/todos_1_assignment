reed [4:01 PM]
@channel hello everybody!

So, CORS rears its ugly head with this Dark Sky API app.
The Dark Sky API protects itself using CORS to try and prevent us from making API calls using our Secret Key on the frontend.
This is actually a good thing- it prevents our Secret Key from accidentally being found by a savvy user or webcrawler - remember, if it's in our client, our browser downloads *everything* before it starts our apps up!
However, because we're just tinkering around, we don't really have to worry about this.
I recommend using what's known as a *proxy server* to send our requests through a fake "backend" - that makes Dark Sky happy, because backend requests are (theoretically) private.
There's a great one called CORS anywhere - you literally just pass requests in after this URL:
Untitled
https://cors-anywhere.herokuapp.com/
Like this:
Untitled
https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${SECRET_KEY}/37.8267,-122.4233
it should then work just fine :slightly_smiling_face:
