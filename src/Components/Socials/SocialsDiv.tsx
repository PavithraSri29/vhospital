import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsGoogle,
  BsWhatsapp,
} from 'react-icons/bs';

const SocialsDiv = () => {
  return (
    <div className="flex gap-3 mt-8 my-3 ms-3 me-4 text-2xl ml-1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/venkataeswara-hospitals/?originalSubdomain=in">
        <BsLinkedin />
      </a>
      {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/RomaLetodiani">
        <BsGithub />
      </a> */}
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Venkataeswara/">
        <BsFacebook />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/vhospitals/">
        <BsInstagram />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://x.com/i/flow/login?redirect_after_login=%2FVHChennai">
        <BsTwitter />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCJf2urcw-GriRfa1Iu8MeGQ/about">
        <BsYoutube />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?hl=en-IN&gl=in&q=Venkataeswara+Hospitals,+36+-+A,+Chamiers+Rd,+Nandanam+Extension,+Nandanam,+Chennai,+Tamil+Nadu+600035&ludocid=15776484453524650638&lsig=AB86z5VFIl2VqfAOS8TVTkzIWeer#lrd=0x3a5267b1f0f26955:0xdaf15505e8cf3a8e,3">
        <BsGoogle />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://wa.me/919384848287">
        <BsWhatsapp />
      </a>
    </div>
  );
};

export default SocialsDiv;
