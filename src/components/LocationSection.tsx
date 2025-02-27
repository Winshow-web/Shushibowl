import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface LocationSectionProps {
  address?: string;
  phone?: string;
  businessHours?: string;
  mapUrl?: string;
}

const LocationSection = ({
  address = "Brīvības iela 123, Rīga, LV-1001, Latvia",
  phone = "+371 12345678",
  businessHours = "Mon-Fri: 11:00-22:00, Sat-Sun: 12:00-23:00",
  mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.3192244361125!2d24.1051723!3d56.9495798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfd7a81eec83%3A0xf00c8c5f439dc210!2zQnLEq3bEq2JhcyBpZWxhLCBSxKtnYSwgTGF0dmlh!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
}: LocationSectionProps) => {
  return (
    <section
      className="w-full py-16 bg-rich-black text-white relative overflow-hidden"
      id="location"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gold-gradient mb-2">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-deep-red mb-4"></div>
          <p className="text-gray-300 text-center max-w-2xl">
            Experience authentic Asian cuisine in the heart of Riga. We're
            conveniently located and ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-[300px] w-full overflow-hidden rounded-lg border-2 border-gold shadow-xl shadow-gold/10">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shushi Bowl Riga Location"
              className="w-full h-full"
            ></iframe>
          </div>

          <Card className="bg-gray-900 border-gold border-2 h-[300px] flex flex-col justify-center shadow-xl shadow-gold/10">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-deep-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold">Address</h3>
                    <p className="text-gray-300">{address}</p>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div className="flex items-start gap-4">
                  <Phone className="text-deep-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold">Phone</h3>
                    <p className="text-gray-300">{phone}</p>
                  </div>
                </div>

                <Separator className="bg-gray-700" />

                <div className="flex items-start gap-4">
                  <Clock className="text-deep-red mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gold">
                      Business Hours
                    </h3>
                    <p className="text-gray-300">{businessHours}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80"
            alt="Decorative lantern"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
