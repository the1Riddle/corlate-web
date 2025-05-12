import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import FormSection from "./FormSection";

const scriptURL = "https://formsubmit.io/send/glinteastnetmarketing@gmail.com"; // Replace with your actual URL

const PartnerForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  // Form data state
  const [formData, setFormData] = useState({
    partnerName: "",
    nationality: "",
    idPassport: "",
    dateOfBirth: "",
    physicalAddress: "",
    
    gender: "",
    
    termsOfAgreement: "",
    
    maritalStatus: "",
    
    areaOfResidence: {
      town: "",
      estateVillage: ""
    },
    
    emailAddress: "",
    
    sourcesOfIncome: {
      employment: false,
      businesses: false
    },
    
    termsOfApplication: {
      moneyMarket: false,
      amountCredit: "",
      monthlyInterest: false
    },
    
    amountCreditedInWords: "",
    
    nextOfKin: [
      {
        name: "",
        relationship: "",
        phoneNo: "",
        id: ""
      }
    ]
  });

  // Update form data
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Update nested form data
  const updateNestedFormData = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  // Update next of kin data
  const updateNextOfKin = (index, field, value) => {
    const updatedKin = [...formData.nextOfKin];
    updatedKin[index] = {
      ...updatedKin[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      nextOfKin: updatedKin
    }));
  };

  // Add next of kin row
  const addNextOfKin = () => {
    setFormData(prev => ({
      ...prev,
      nextOfKin: [
        ...prev.nextOfKin,
        { name: "", relationship: "", phoneNo: "", id: "" }
      ]
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: "Form submitted successfully",
            description: "Your application has been sent successfully.",
          });
          form.reset();
        } else {
          throw new Error('Failed to submit the form');
        }
      })
      .catch((error) => {
        toast({
          title: "Submission failed",
          description: (
            <div>
              There was an error submitting your application. Please try again or click the link bellow to download the offline form.
              <br />
              <a
                href="/src/lib/MONEY%20MARKET%20.pdf"
                download
                className="text-blue-500 underline"
              >
                Download Offline Form
              </a>
            </div>
          ),
          variant: "destructive",
        });
        console.error('Error!', error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className="max-w-4xl mx-auto"
    >
      <Card className="shadow-lg border-0">
        <div className="p-6">
          {/* Personal Information */}
          <FormSection title="Personal Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="partnerName">Name of the partner</Label>
                <Input 
                  id="partnerName" 
                  value={formData.partnerName}
                  onChange={(e) => updateFormData("partnerName", e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="nationality">Nationality</Label>
                <Input 
                  id="nationality" 
                  value={formData.nationality}
                  onChange={(e) => updateFormData("nationality", e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="idPassport">ID / Passport</Label>
                <Input 
                  id="idPassport" 
                  value={formData.idPassport}
                  onChange={(e) => updateFormData("idPassport", e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input 
                  id="dateOfBirth" 
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="physicalAddress">Physical Address</Label>
              <Textarea 
                id="physicalAddress" 
                value={formData.physicalAddress}
                onChange={(e) => updateFormData("physicalAddress", e.target.value)}
                required
              />
            </div>
          </FormSection>
          
          {/* Gender */}
          <FormSection title="Gender">
            <div className="mb-4">
              <RadioGroup 
                value={formData.gender}
                onValueChange={(value) => updateFormData("gender", value)}
                className="flex flex-row space-x-8"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>
          </FormSection>
          
          {/* Terms of Agreement */}
          <FormSection title="Terms of Agreement">
            <div className="mb-4">
              <RadioGroup 
                value={formData.termsOfAgreement}
                onValueChange={(value) => updateFormData("termsOfAgreement", value)}
                className="flex flex-row space-x-4 flex-wrap"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Quarterly" id="quarterly" />
                  <Label htmlFor="quarterly">Quarterly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Yearly" id="yearly" />
                  <Label htmlFor="yearly">Yearly</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Renew" id="renew" />
                  <Label htmlFor="renew">Renew</Label>
                </div>
              </RadioGroup>
            </div>
          </FormSection>
          
          {/* Marital Status */}
          <FormSection title="Marital Status">
            <div className="mb-4">
              <RadioGroup 
                value={formData.maritalStatus}
                onValueChange={(value) => updateFormData("maritalStatus", value)}
                className="flex flex-row space-x-4 flex-wrap"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Married" id="married" />
                  <Label htmlFor="married">Married</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Single" id="single" />
                  <Label htmlFor="single">Single</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Widow" id="widow" />
                  <Label htmlFor="widow">Widow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Others" id="others" />
                  <Label htmlFor="others">Others</Label>
                </div>
              </RadioGroup>
            </div>
          </FormSection>
          
          {/* Area of Residence */}
          <FormSection title="Area of Residence">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="town">Town</Label>
                <Input 
                  id="town" 
                  value={formData.areaOfResidence.town}
                  onChange={(e) => updateNestedFormData("areaOfResidence", "town", e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="estateVillage">Estate/Village</Label>
                <Input 
                  id="estateVillage" 
                  value={formData.areaOfResidence.estateVillage}
                  onChange={(e) => updateNestedFormData("areaOfResidence", "estateVillage", e.target.value)}
                  required
                />
              </div>
            </div>
          </FormSection>
          
          {/* Email Address */}
          <FormSection title="Email Address">
            <div className="mb-4">
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input 
                id="emailAddress" 
                type="email"
                value={formData.emailAddress}
                onChange={(e) => updateFormData("emailAddress", e.target.value)}
                required
              />
            </div>
          </FormSection>
          
          {/* Sources of Income */}
          <FormSection title="Sources of Income">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="employment"
                  checked={formData.sourcesOfIncome.employment}
                  onCheckedChange={(checked) => updateNestedFormData("sourcesOfIncome", "employment", checked)}
                />
                <Label htmlFor="employment">Employment</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="businesses"
                  checked={formData.sourcesOfIncome.businesses}
                  onCheckedChange={(checked) => updateNestedFormData("sourcesOfIncome", "businesses", checked)}
                />
                <Label htmlFor="businesses">Businesses</Label>
              </div>
            </div>
          </FormSection>
          
          {/* Terms of Application */}
          <FormSection title="Terms of Application">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="moneyMarket"
                  checked={formData.termsOfApplication.moneyMarket}
                  onCheckedChange={(checked) => updateNestedFormData("termsOfApplication", "moneyMarket", checked)}
                />
                <Label htmlFor="moneyMarket">Money Market</Label>
              </div>
              
              <div>
                <Label htmlFor="amountCredit">Amount Credit</Label>
                <Input 
                  id="amountCredit" 
                  type="number"
                  value={formData.termsOfApplication.amountCredit}
                  onChange={(e) => updateNestedFormData("termsOfApplication", "amountCredit", e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2 mt-6">
                <Checkbox 
                  id="monthlyInterest"
                  checked={formData.termsOfApplication.monthlyInterest}
                  onCheckedChange={(checked) => updateNestedFormData("termsOfApplication", "monthlyInterest", checked)}
                />
                <Label htmlFor="monthlyInterest">Monthly Interest 10%</Label>
              </div>
            </div>
          </FormSection>
          
          {/* Amount Credited in Words */}
          <FormSection title="Amount Credited in Words">
            <div className="mb-4">
              <Label htmlFor="amountCreditedInWords">Amount Credited in Words</Label>
              <Textarea 
                id="amountCreditedInWords" 
                value={formData.amountCreditedInWords}
                onChange={(e) => updateFormData("amountCreditedInWords", e.target.value)}
              />
            </div>
          </FormSection>
          
          {/* Next of Kin */}
          <FormSection title="Next of Kin">
            {formData.nextOfKin.map((kin, index) => (
              <div key={index} className="mb-6 p-4 bg-gray-50 rounded-md">
                {index > 0 && <h4 className="font-medium mb-2">Contact {index + 1}</h4>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor={`kinName-${index}`}>Name</Label>
                    <Input 
                      id={`kinName-${index}`} 
                      value={kin.name}
                      onChange={(e) => updateNextOfKin(index, "name", e.target.value)}
                      required={index === 0}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`relationship-${index}`}>Relationship</Label>
                    <Input 
                      id={`relationship-${index}`} 
                      value={kin.relationship}
                      onChange={(e) => updateNextOfKin(index, "relationship", e.target.value)}
                      required={index === 0}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor={`phoneNo-${index}`}>Phone No</Label>
                    <Input 
                      id={`phoneNo-${index}`} 
                      value={kin.phoneNo}
                      onChange={(e) => updateNextOfKin(index, "phoneNo", e.target.value)}
                      required={index === 0}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor={`id-${index}`}>ID</Label>
                    <Input 
                      id={`id-${index}`} 
                      value={kin.id}
                      onChange={(e) => updateNextOfKin(index, "id", e.target.value)}
                      required={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <Button 
              type="button" 
              variant="outline" 
              onClick={addNextOfKin}
              className="mt-2"
            >
              Add Another Next of Kin
            </Button>
          </FormSection>
          
          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <Button 
              type="submit" 
              className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </div>
      </Card>
    </form>
  );
};

export default PartnerForm;