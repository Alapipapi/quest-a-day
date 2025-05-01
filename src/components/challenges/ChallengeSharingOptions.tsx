
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ChallengeSharingOptionsProps {
  challengeTitle: string;
  challengeCategory: string;
}

const ChallengeSharingOptions = ({ challengeTitle, challengeCategory }: ChallengeSharingOptionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    const encodedTitle = encodeURIComponent(challengeTitle);
    return `${baseUrl}/challenge/${challengeCategory}/${encodedTitle}`;
  };

  const handleShare = (platform: string) => {
    const url = getShareUrl();
    const text = `Check out this ${challengeCategory} challenge: ${challengeTitle}`;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(challengeTitle)}&summary=${encodeURIComponent(text)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "Challenge link has been copied to clipboard",
        });
        setIsOpen(false);
        return;
    }
    
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <Twitter className="h-4 w-4 mr-2" />
          <span>Share on Twitter</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('facebook')}>
          <Facebook className="h-4 w-4 mr-2" />
          <span>Share on Facebook</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('linkedin')}>
          <Linkedin className="h-4 w-4 mr-2" />
          <span>Share on LinkedIn</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('copy')}>
          <LinkIcon className="h-4 w-4 mr-2" />
          <span>Copy Link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChallengeSharingOptions;
