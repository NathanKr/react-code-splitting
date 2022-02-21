<h2>Motivation</h2>
Experiment with react code splitting using React.lazy \ React.Suspense

<h2>Points of interest</h2>
<p>Component1 is _not_ loading when the App is loading </p>

![ScreenShot](/images/app_is_mounting.png)

<p>Component1 _is_ loading when the button is pressed - thus lazy loading the component is in action</p>

![ScreenShot](/images/button_click.png)


<p>Using code spliting - the component reside in a seperate js file (in red)</p>

![ScreenShot](/images/prod_build_with_code_spliting.png)

<p>when code spliting is not used i.e. use regular import the component does not reside in its own file</p>

![ScreenShot](/images/prod_build_without_code_spliting.png)

<h2>Setup</h2>
<ul>
<li>npm i</li>
<li>npm run dev</li>
</ul>
