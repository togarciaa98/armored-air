"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Check, Lock } from "lucide-react";
import { additionalServices } from "@/data/services";

const cityOptions = [
  { value: "", label: "Select a city" },
  { value: "mexico-city", label: "Mexico City" },
  { value: "guadalajara", label: "Guadalajara" },
  { value: "monterrey", label: "Monterrey" },
  { value: "multiple", label: "Multiple Cities" },
];

const protectionOptions = [
  { value: "", label: "Select protection level" },
  { value: "low-profile", label: "Low Profile (VR4-VR5)" },
  { value: "executive", label: "Executive (VR6)" },
  { value: "high-risk", label: "High Risk (VR7)" },
  { value: "unsure", label: "Need Consultation" },
];

const vehicleCountOptions = [
  { value: "1", label: "1 Vehicle" },
  { value: "2", label: "2 Vehicles" },
  { value: "3", label: "3 Vehicles" },
  { value: "4", label: "4+ Vehicles (Convoy)" },
];

export function PrivateRequestForm() {
  const searchParams = useSearchParams();
  const preselectedVehicle = searchParams.get("vehicle") || "";
  const preselectedCity = searchParams.get("city") || "";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    position: "",
    city: preselectedCity,
    startDate: "",
    endDate: "",
    protectionLevel: "",
    numberOfVehicles: "1",
    additionalServices: [] as string[],
    specialRequirements: preselectedVehicle
      ? `Interested in: ${preselectedVehicle.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}`
      : "",
    confidentialityAcknowledged: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter((s) => s !== service)
        : [...prev.additionalServices, service],
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Required";
    if (!formData.city) newErrors.city = "Required";
    if (!formData.startDate) newErrors.startDate = "Required";
    if (!formData.endDate) newErrors.endDate = "Required";
    if (!formData.protectionLevel) newErrors.protectionLevel = "Required";
    if (!formData.confidentialityAcknowledged) {
      newErrors.confidentialityAcknowledged = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // In production, this would send to your backend
      console.log("Form submitted:", formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-graphite border border-slate/50 p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-available/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-available" />
        </div>
        <h3 className="text-2xl font-light text-platinum mb-4">
          Request Received
        </h3>
        <p className="text-silver max-w-md mx-auto">
          Thank you for your inquiry. Our team will review your requirements and
          respond within 4 hours during business hours. For urgent matters,
          please contact our secure line directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
          Personal Information
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            id="firstName"
            name="firstName"
            label="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
            placeholder="John"
          />
          <Input
            id="lastName"
            name="lastName"
            label="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
            placeholder="Smith"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email *"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="john@company.com"
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            label="Phone *"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      {/* Professional Information */}
      <div>
        <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
          Professional Information (Optional)
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            id="organization"
            name="organization"
            label="Organization"
            value={formData.organization}
            onChange={handleInputChange}
            placeholder="Company or Organization"
          />
          <Input
            id="position"
            name="position"
            label="Position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Your Role"
          />
        </div>
      </div>

      {/* Service Requirements */}
      <div>
        <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
          Service Requirements
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Select
            id="city"
            name="city"
            label="City *"
            value={formData.city}
            onChange={handleInputChange}
            options={cityOptions}
            error={errors.city}
          />
          <Select
            id="protectionLevel"
            name="protectionLevel"
            label="Protection Level *"
            value={formData.protectionLevel}
            onChange={handleInputChange}
            options={protectionOptions}
            error={errors.protectionLevel}
          />
          <Input
            id="startDate"
            name="startDate"
            type="date"
            label="Start Date *"
            value={formData.startDate}
            onChange={handleInputChange}
            error={errors.startDate}
          />
          <Input
            id="endDate"
            name="endDate"
            type="date"
            label="End Date *"
            value={formData.endDate}
            onChange={handleInputChange}
            error={errors.endDate}
          />
          <Select
            id="numberOfVehicles"
            name="numberOfVehicles"
            label="Number of Vehicles"
            value={formData.numberOfVehicles}
            onChange={handleInputChange}
            options={vehicleCountOptions}
          />
        </div>
      </div>

      {/* Additional Services */}
      <div>
        <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
          Additional Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {additionalServices.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => handleServiceToggle(service)}
              className={`p-3 text-xs text-left border transition-colors ${
                formData.additionalServices.includes(service)
                  ? "bg-champagne/10 border-champagne text-champagne"
                  : "bg-transparent border-slate text-silver hover:text-platinum hover:border-silver"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      {/* Special Requirements */}
      <div>
        <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
          Special Requirements
        </h3>
        <Textarea
          id="specialRequirements"
          name="specialRequirements"
          label="Additional Details"
          value={formData.specialRequirements}
          onChange={handleInputChange}
          placeholder="Please share any specific requirements, security considerations, or questions..."
        />
      </div>

      {/* Confidentiality */}
      <div className="bg-graphite border border-slate/50 p-6">
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            id="confidentialityAcknowledged"
            name="confidentialityAcknowledged"
            checked={formData.confidentialityAcknowledged}
            onChange={handleCheckboxChange}
            className="mt-1 w-4 h-4 bg-onyx border-slate text-champagne focus:ring-champagne/20"
          />
          <div>
            <label
              htmlFor="confidentialityAcknowledged"
              className="text-sm text-platinum cursor-pointer"
            >
              I acknowledge that this inquiry will be handled with strict
              confidentiality *
            </label>
            <p className="text-xs text-silver mt-2">
              All information shared is protected by our confidentiality protocols.
              Your data is never shared with third parties and is used solely to
              fulfill your security requirements.
            </p>
            {errors.confidentialityAcknowledged && (
              <p className="text-xs text-red-400 mt-2">
                Please acknowledge to proceed
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button type="submit" variant="primary" size="lg">
          Submit Private Request
        </Button>
        <div className="flex items-center gap-2 text-xs text-silver">
          <Lock className="w-3 h-3" />
          <span>Secure & Encrypted</span>
        </div>
      </div>
    </form>
  );
}
