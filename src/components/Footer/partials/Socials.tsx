import { ComponentType, SVGProps } from "react";
import socials from "@source/footer-socials.json";
import X from "@assets/icons/socials/x.svg";
import Instagram from "@assets/icons/socials/instagram.svg";
import Linkedin from "@assets/icons/socials/linkedin.svg";

type SocialIcon = {
  [key: string]: ComponentType<SVGProps<SVGSVGElement>>;
};

const SOCIAL_ICONS: SocialIcon = {
  x: X,
  instagram: Instagram,
  linkedin: Linkedin,
};

export const Socials = () => (
  <ul>
    {socials.map((social) => {
      const Icon = SOCIAL_ICONS[social.brand];

      return (
        <li key={social.brand}>
          <a href={social.to} target="_blank">
            <Icon width={28} height={28} />
          </a>
        </li>
      );
    })}
  </ul>
);
