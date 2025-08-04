export const ClientReviews = () => {
  const reviews = [
    "/lovable-uploads/23559f32-9f01-4731-8946-ca951dc35eae.png",
    "/lovable-uploads/23559f32-9f01-4731-8946-ca951dc35eae.png",
    "/lovable-uploads/23559f32-9f01-4731-8946-ca951dc35eae.png"
  ];

  return (
    <section className="py-20 bg-beauty-card/30" id="reviews">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-script text-5xl text-beauty-rose text-center mb-16">
            Client Review
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-beauty-card/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-beauty-rose/20 hover:border-beauty-rose/40 transition-all duration-300">
                <div className="aspect-square bg-beauty-rose/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-beauty-rose/20 rounded-full flex items-center justify-center">
                    <span className="font-script text-2xl text-beauty-rose">★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};