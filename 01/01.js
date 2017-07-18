/**
 * Created by nadeeshaniwilliam on 7/16/17.
 */
const {createElement} = React;
const {render} = ReactDOM;

const style = {
    backgroundColor:'yellow'
}
const title = createElement(
    'h1',
    {id:'title',className:'header', style:style},
    'Use js'
);

//work correctly
render(title,document.getElementById('root1'));
//try t run jsx
render(<h1 style={{backgroundColor:'green',fontcolor:'white'}}>Using Babel / JSX</h1>,document.getElementById('root'));

