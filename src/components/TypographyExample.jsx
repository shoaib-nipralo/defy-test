export default function TypographyExample() {
    return (
      <div className="p-6">
        <h1 className="h1 text-midnight">This is an H1 Title</h1>
        <h2 className="h2 text-harvest">This is an H2 Title</h2>
        <h3 className="h3 text-catalina">This is an H3 Title</h3>
  
        <p className="body-text text-dark">This is body text with dark color.</p>
        <p className="small-text text-lightblue">
          This is small text with light blue color.
        </p>
  
        <div className="p-4 rounded-lg text-midnight text-outline text-outline-fallback">
          Background in Harvest Gold with Midnight Text
        </div>
  
        <div className="p-4 mt-4 rounded-lg bg-light text-dark">
          Light Background with Dark Text
        </div>
      </div>
    );
  }
  