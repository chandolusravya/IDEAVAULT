// components/TextToImage.tsx

import { useState } from "react";
import { Button } from "./ui/button"; // Make sure your Input and Button components are styled accordingly
import { Dialog, DialogContent,DialogFooter, DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";

interface TextToImageProps {
  open: boolean;
  onClose: () => void;
  onImageGenerated: (imageUrl: string) => void;
  docId: string;
}

const TextToImage = ({ open, onClose, onImageGenerated, docId }: TextToImageProps) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImageForDoc = async (docId: string, title: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/generateImageForDoc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ docId, title }),
    });
    const data = await response.json();
    if (data.error) {
      console.error("Error generating image:", data.error);
      return null;
    }
    return data.imageUrl;
  };

  const handleGenerateImage = async () => {
    if (!title) {
      console.log("Title is required");
      return;
    }
    setLoading(true);
    try {
      console.log("Generating image...");
      const imageUrl = await generateImageForDoc(docId, title);
      if (imageUrl) {
        onImageGenerated(imageUrl); // Pass the image URL back to the parent component
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <h2>Generate Image for Document</h2>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Enter a title for the image prompt"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleGenerateImage} disabled={!title || loading}>
            {loading ? "Generating..." : "Generate"}
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TextToImage;
