import React from 'react';
import ReactDOM from 'react-dom/client';
export default function Home() {
  return (
    <div>home</div>
  )
}
const rootElement = document.getElementById('home');
if( rootElement){
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Home/>);
}