
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import Particles from '@/components/Particles';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Users, Award, Lightbulb, GraduationCap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import FAQ from '@/components/FAQ';

const About = () => {
  const isMobile = useIsMobile();
  
  const timeline = [
    {
      year: 'back in 2018',
      title: 'Stack Overflow Days: The Grind',
      description: "Remember the struggle? Piecing together solutions from scattered forums, battling cryptic errors. Building required sheer persistence."
    },
    {
      year: '2022-2023',
      title: 'AI Assistants Emerge: Faster Cycles',
      description: "Tools like Copilot began automating the boilerplate. Development speed increased, freeing up mental energy from repetitive tasks."
    },
    {
      year: '~2023',
      title: 'Conversational Code: The Game Changer',
      description: "ChatGPT, Cursor... suddenly, you could *talk* your code into existence. Prototyping and complex features became dramatically faster."
    },
    {
      year: 'Dec 2024',
      title: '"Vibe Coding" Arrives: Build Easy, Launch Hard',
      description: "The ethos shifts. With modern tools, building the *what* feels almost effortless. But the *who* and *how* – finding users – becomes the glaring challenge."
    },
    {
      year: 'Present',
      title: 'Vibelaunch: The Missing Playbook',
      description: "We saw the gap. Building is solved, launching isn't. Vibelaunch provides the clear, actionable strategy to get your creation in front of your first 1000 users."
    }
  ];
  
  const team = [
    {
      name: 'Kristian',
      role: 'Founder & CEO',
      bio: "In the heart of Berlin's thriving tech scene, I've had the privilege of contributing to the growth of innovative startups, including leading an engineering team at a VC-funded company valued at €20 million. My journey began while studying computer science, where I founded my first startup and learned the importance of collaboration and community support. With over six years of experience in software development, I've seen firsthand how the right tools and mindset can transform projects. Now, I'm passionate about helping fellow coders tap into their creative potential and build projects that resonate with the vibe of our community.",
      avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALwAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA5EAABBAECAwYEBAYCAgMAAAABAAIDEQQFIRIxQQYTIlFhcTJCgZEHFKHRIzNSscHwFeEkYlNyov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAQUAAwADAQAAAAAAAAABAhEDBBIhMUEiMlEUI2ET/9oADAMBAAIRAxEAPwCkmJKSS2skkzxeim7w+Hmobog+BAEKqOuikw2nqxSaNtc0AON0zxvaFDKXyPB5A7IsiABbg2eSlxB3JReeJmwUmR8LOL7eqG6QVYqBa4k1XJJsfE0jqBuhzZkMbg2YtFDrt0Kp5WuwYWQPhdG9nO+v7rB5aNliL/wttDe+nAAKsdcheC1rG8Xk51UndqENjvInM5UbJ/wmsqE8TDWePlaTj6Jm5uKyQtMjGkfEfLytSjljnHEzjDPMtpUppk7GBceI3VJmHakR/i9EGMrSyKDxHhkaeik9tOIHXkhWrX8xjHDmOaCSu/4iEwtPJXGnCABkIUjL5I7gmIptoAquG1JImxBDtikkVZoBIBIUpBADqQPgTEeEFMPhrqnYBGna+iYG1KNv8MjqoAeKkAQZEBI4g7KUuyI0IcqAFGOKw3c+Sz87UWYplZIeF4+G+ifLzzBGWY7h3nFRc4enIfdcjrOcZZnRtDXOPz89vNc2SVujohHbEHJFm6pMSyQ8DTTpHOofQHmgahI6F7Y3U5rOthALntAoyPe3qOQ9lF0hkjqU72pSBttEo8t8bzTyAfVXPzUr5uIzkMvezzWS+J1A9ByV1r4MKNtVJPVkncBNpCTZd1TLh4Q638Z2cBtxFW8HXsmThjdJV9DycsuCbHkbeTF3hu9yi3B3rZWMLOHpzUlHYRZDchgdVEN3A8ymaKdQWRpuowY8Vd8Dtb2uG/0WxG9r6e02wjZy6IStGM0F+W0XFlplFDq2WPspR8qWhDGf8acJnc7ThBI5F8kNzhVIsY/upSNAdQCAKILePnSSnMze6SSoZeaFLcc0ogSSTyUpAgYr2aFFo8aTQpgUbPJFAEaS1IinWOSaRyTCHNolOwHO3JUNSyXYwZIBcV+M+XkrjnHioilj9opA3T/F8zwCon0VD7HNOkys3OOO1zi57qb6lPqeiahpUgbNHs753dVp9kS2fW43yNBIfYpepanhw5QjEzQ8DkDvS45TaO7Hj3+nikWBnOgf3Zpp6Naq0OmZM73fwngDzC9mZpWNGKLGtafJVpNGhJPBTb5BZyzSRstNF+nj8mNkg92Ink+VKQ0XLLWvLTw+y9d/4aFu/DupnR4HfEFn/Il4UtHH08mdp00MfFQryI2VcY07STHRsXf+F66dBxx4eHw1yO6rN7G4csg71jqu+FpICccz9Inporo8lbG/unO42AjpfP2Xbae1jcCDg5Fg63v1WT2m0UaVqBhAB2BscgrmgPL9Pa3+hxA9V34pWefkjtdGyw1zU20DY5Ibj4bU2/AtzIegoNP90ZrbbZKA1u5PRAqC3XJO48RtCsqQNckCIygJ0pBfJJAFyGqcEpHBKLZBcfFSRQVik++BDjKKSCzdOwBl180zGkGwk2i6kYNSAUruJnEfiXPdqw78hGbFCUXfXYroC0OcRdE8lj9rGhukOPDZa8O9uiU1wVHszOwuLLlaw6dgIij515r0HWdfbpsYgxcZ2Rlubd9GrnvwsjH5HM25SAWrevZMsE7jjwPlkcduBpoN9V503yeliXwMHUp+1GY8zN4mjq1pKbTNd1eBwjzTYHUjdEm1rUmU3/jcuVx6k8NfQA/qpxR5OY9rZYqDmh1jfhJF1fVZTk6NYxV8HT42TPmY/eMB2WTqer5cbzGwFrgDZ9V0fZ7HMOHTxZtYHaXAkuSWDdxds07fqsZbo9HRdowGZ3aKaQ903ib5h266HSNd1TFc1uqY5MdVfULn4MnVcWbhiwu/iNeNshB39j/hbunZ82TMIcqCdjTsDLHyP/2GxC0cmjFRTM38TY295hZTXeCWPhNeao9nm8GnRjzJI+61fxFi4dGwWAVUpr7KhozB/wAZjUd+Bd2mfFnnalfIuScqU2OuOuqhJ8Npod7tdlnKHumbJuQpToFmyYBAECEqSeK5JwfCCixDhJJMixFtuzbQ+6txN7Kd0KCTdw4JFEGiuSm2iKSpNyQAmgcaMZOGtkFnxIkvyoAVB8jCNq5qGqNxJtMnxZ4HyS5DHd1IDQY4bqcauYskcEEuQ6ISOjBDWOHU/wClZZ5OMLR0aeKlkplT8N4fy+mzsfbXGanA+i7Gbu5Y+Dg4R5t5rC7OwSwwOyMjgD8h7pC1ooDev8LTk1JrLYwAACi4jquC75PRjGuEUJtBt1ieQNPMUFFunxREV4n/ANTtyiZWoniABsnoqOVrc2BjySRYokceVi691HBtVHS4mOIIaJonog5mK11te1paeVjZcZp/aLLmeTO0xOJ2bx8X2Wrj9oc6PMELsNsuO8/FxWQplkjdBCL8Lv8AweOSXROcz0advstLAwY4QQSXgmyHtu1lv1FmI+5CACeZ5LVwdQZIGkEEFSqfZUkzlPxNxXTYuHFCwlzpqa0eZHL9FWy8fHx8eKPFhdGIiY3Fxvi4QN10uuOEU2FliJsrYpi5wd8tgrI7RCMujkhoNluWvcAf4XRp5v8A6KKOPUY0sTkzFlrgTQkcNqb22wWhhvCaHJemeUWoj4ElCLlSd5IFDmnYClF8ioN5UnbvzTbhKhD2kquJK6VrzIKp1BOgZqOpJlfomeogoAnaR+G1AlTPwIAiw72iPNoUY8VKch8VIAIxaeiuiMroZmsLXG/GVlttO7mD1CU47lRpjntlZvyPjLpGsa9rRy4uX0WPxPZPkcTiWjxAqePkyuLhNIXCtrUJHBs7X3bSOFy8rNFx4PVwzT5RnY8wfMJJXEPLtm1yC2nMa6INc9gvnuBa53tFpuXNGWafOGOj6cuIJ9N07C7lpz8uZshcwfxCRzIBH6qY8RNZNuRrDCxjIC6WNxHLxhXoG4zTwjJjBPqnx+zmimBr/wAwXOEgBqY7jipR1TTtCxg9rGSvc+RoYInFxaCOftd/ZZy7ui1JUB1OOJzKeWuZ6G0DQuNkksfESxrvC70pc+7RMyXUpsmOWaHBa6mMLvi+i6/CDWBooWQP0UZEkEZM0WwtzGGKZ7w2r23tYPaMhuSyEAeBgBA81oZGpSYbzHCG+Ju9rAyHOkc6R5Jcedr0dJjf2Z5+rzKtqK5NsTDnaXSlEFdx5xNruF1KTzZsKDhZtLk0FAEovE2+Sc7ct00dVSTARdJ2KitBGYTICbBdY9k6m7ndJJDLxKY7XSXy2luUAQcaRuYpAejBADtABBCTwONO34qSdvJSKAmxO47V1SZ8VKLvjTAbkbCrsmL2uZ04rtWH7IRxns4siLk2i4Va5NTjtWjs02Ta6LeJI3juQbkVasSZrYBT2Nc3/wBlT0+WCQlodYPL3WmcGHIaAXb+q4lGj0FOyqzU8QNPBAwUboFWcbLY43FG1iC3RsUPsNWhj4MMUXEzlXJTLd4aqSA5kjHN4Afi35KvE/xbfdHyYwyy6t+QVPJsNaGtIaRfF+n7qIY3knRlkyqKbAZL+9kc+9qqlVfvurEjbbfVVpLXtxW1UjxZPc7ZXO33TcNJ3KWyZIg0nmmdyARbpCf8NoAZiMwW6h5IDUeN/CSaQAOUcP3SSlJdz80kAWj8CiXU21F8gqkN7xVIoB3nki8YVbj4lOwigLTHC7US4d6hsIUHOp4PqnYFyNwLq6qDnAEkqDXcElnfdRlPFxIAI1xe8N5lxoD1Oyp6Drg1LWdTxIXNOJA0dyer6NF/1/ZB1fJ/I6VmZI+NrOCM387qA+1k/RYn4cgRTTzuGzyIr8tif8LDP9GbYX80bWqxS405lxvCSbIHJU2dopov5nE1/kuiz8fvgAOS53V9O4HbDp5Lz4yR6Ek0+CyztMXG+8A+qvY3aVpbwiQFcrHin546+i6PRNMjc4F0Vj2CzyOK6ZUHP8NzBdLqczZJQWQDkOrlzH4g6vkaR2mwn4zvAMYB8J+Fw4nL0HFgELRQArkvPfxYxRJ+Vz2AExnuJPYglv8AZ6rSy/sI1SrGbeDmQahhR5WOSYnjr8p6g+oQpfhtefdmtcdpWUY5HF2LMR3jf6T/AFLvpJAWA7Fp3BC9dOzywVWnAUDJvdbJzJw1smIIdkqs0eVIE05HIJhO4Na09f7IGF5KZKrmSutpxITSADP+G0kJ0hqkkCHlJ+VMQ8i62UHl4i4gLSifK7wvbQpMCcY4fVSPEHAWpRtINjkiPj+b9EAM34qUJDTz6clNuxtxoXzWhp+hZurOJxYT3fWV/hZ9zz+lpUFlBjyQSSL9Fd0/T8vUJDFiQOkd1cPhb7nouw03sjhYsYkzHd+4DcnwsHt5rXGVjQY8vcMZDjxAkuAoADe9lQHhP4kv/I5MOiCZr3RgTZHBy4yDTR7D+6X4ej8xhapE0XLFwZLW+ZbYd/8AklcvrOdJqWqZWdL8U0pkI8gTsPstz8ONUbpfaSN8v8qUcD/QeawlyXF07PQoKkja67B5EeXmqmeQ429q19W09ujztey/yOQf4TujHdWn08v3G+TkEEkkAg8l5k4uMtrPWjLcrRDGxIJmcQI9qWzpcTYTwCvdYUE/cygA+E8wW8lt4kwb4gPuVyyVM6E+DTe6jXSiuC7YOOZ2b1rKH8pmfBFGfMsa66+sgWt2g1p7Im4+I0vyp3CNjG9XHYfqQrH4i6TF2e/DTG05xDpg9rpHX8UjjZPtz+y7tHB3uODVzVbTxW13HZXPObp5xn26bHAPqWXsfpy+y4dbPY/Wn6B2gw9QFmJklStB2dHXiv1rdegnR5x2pceH09FOYfDvdhel5fZ3RNYiE0TGxuc22ywCv05Fclq/ZLUNP4pIP/Kxx8zB4m+4WgrOZkaSSDyB39lWc53Fxb8NUrk7u6jcJLFij/vRBip8dFuyTGNBJxuIpWjsq0IDHODRRVmyeX3QgHd8IKSc8gEkxB2PAZuEKTvCbj4QP/ZSvwInCH8LKJc7oAmBGK6pyuYOLk6jkiHEgdI4866fVbui9kcjLDZc68eE8h8zv2XZ4sGLp0QixYmxsHMDr7nqmFmNo3ZPFxOGbN/8jIAvhrwN9vP6rcyZ4cSPcNA6NASdkCne3NY87hLI6aY1HGL9/RIKI5E7p2ibLeWxdGDqPRcX+I3aKXE0H8viju25JMPhqmtrcX1NUL910Mbn6llEvPDGNiG/0+SuvxMfIx5W5MYkaRs124+yfaD0+biL5WW+Y3TwyGCdkzObXWfZeqa12F0/JL5MaPuX+cWx+o5fo1cNqvZfPwS4xj8wxo3LBTh7t/a/dYtUUey9hs7G7S9mjgZlPAYGnzA6H6f4XG6zFlaNqEuBknxRHwvPJ7Tyd7f5tY34f69PpcrhDH3kzBQjdtY/yur7Q58+u4QyNVkw4DD8MzW8PCD8p33B/QrHPBZF/p04JuJkxZpIsgEpZGqO4C1pr1WRlYuViND+cLt2yMdxNcDsN0JgknPdtcC5w5Xy9T6f778Cw88nY83x4On/AAt06TXO2D9QnBdj6e0n07x2zf0s/ZVvx31z81rcGkwm2YzBJIB1ceQ+w/VaGLl6r2X0QYuhytjLB3kzzEHGVx53d7dAvLde1KbV9Zy9QySDLNJxGtvoF6UKSpHnZLbtmeE9ebhV9Vr6T2b1TVS04+O5sTuUsgoH28/ou90X8N8TGIl1N5nkb8m7Wg+w3/VUQoh/wz7SSZOnnTpXky4bQYyTzZfX22H1C9LwdUEgDZefm1Z+n6bi4GL3EMTWRvZwsYAAAK5AdFlRSHEy+6fYF+ErSIUdFqvZ7StbaZJoQJ+k0Phd9fP6riNZ7H52mB0sA/NYo+Zg8Q9wu406bjYad7K9HkEOoje1RJ4mWlrzWx6+qNE8cPDWxXpuv9lsHVmmWADHyT87R4XnyIXnOXhzaflPxsqMskYad+/spAGSkmG/NJMQRw4QBzXZ9itLY2P/AJLJYD/8TXeQ6/fZcrgY5yciCHe5HNb7ea9L8MOIyKKmtApo9EwNCSQcVh1/VU5JgXUOqrwzlzXDqFFjiX+La0WOi1K4thq1z2oZBcTE3k4rYypqidfQLnXPLpnOI28vJTNlQRdwmd0w8PUb0rzX/wAEk7UNgquJ8Hh6IrrLXB2xVLoT7KE7+IVWwWJnsc9xpp4hyK3OEl1DdD7oEuBA91m22aKjjp9MgnyWZbGdzlscS2aMbn0cPm/v6rr5NNwdY0wseGzW2pBXxBUn4TWv24hXXzQ2GXCl76CTgc7pexUUV4eZwatqWLlHQYjEyDvzj8L2fCS6r++69kwOz+FoOBQaHyO2LiKL3fsvJu0Oh5mZ2yccOIs/OyGZr/lZ/UT7H/d16vnam/Nm711vaKbGwfM7/tWop8mak1wZerRula6GMiO2OPGW2OOvAK6i9z7Kh2d7A4mE0TZbTPMRzeAf05D+66fDxTG/vZ6dKNr6M9B+6nl6zh4zhCXOkmB+GPf7lN0lY7cg2PiRxN/hMaLG4rc+/moSZUcDi117G+FuypZOoZD4LYxrL6N3I90JjD3fE7jJrmSs9/4Vt/S9qMzxgsyWkjupA4Dy87UNViZPD30YJcAHCuqljgz6dNA48VjclUsadwwsfc8jET5OaVrEhl/Qcnipo8qHutQz3JYdQWDpb2szJGDlI0vHorcslSVdhUuyGdC3IBAJNWaWL2u0hmpYZnhA/MwNtu272joiSTudA3h2s2FowS3E0lS2VR5C1/i2G3L6pK92kwhp2tzxs/lSHvI/Y9PvY+iSLJo3Oy0ffZj8ggcMLaG3zO/6XRzSim+LqVj9kmgaSX/M6U2fYbLRk3aCVViRGCbgyS29ntP3VyB3E9x5BZLtsyGv6nLQc8siJbsUiieY8PbwtWOaEhF2Vpcw49Q21k5IrOc0ctlL5Za4RpwB3A3ZTcXXYNFRiNMbSd4vmVdkAqt++yYNHw/qpO8RJPRJpJFKSiu9m93xb/ZAlibVPoj2VpzRaiQA6qRQ7M54hZKGg3xbW7/fQfYK5pETJ4Rln4T/ACj0rqf7/ZZ+tuP8Ktj3g3AV/LlfHlwYsZDII2ANY0UOZSk9qBLcw+fK7uSI7DarbqsfDwyHmR+18/VbeS0dxVIEbA3gq9+a53cnbNVx0BkZxGmix19UeQUwAKEe8hsDdHlADD6HZXFUS2Ppg2eORPPdUsXh7rPxnD4ZeIex/wC1cwnkynYKnEB+dzh07slaxIYLSHO/Mg3yJBV7UyWSBzdh5KhplB5IHN1rQ1MA0Sn6Id81wQAbHhWtiuPdM4lg5Ti1mPS2oCeBg9EmMwvxAxOLCx8wN8cT+BwH9JH/AF+qZa3aJok0TLDxY7ku+o3CSRNH/9k='
    },
    {
      name: 'Laurin',
      role: 'Founder',
      bio: "Hey Vibecoders, I'm a bioinformatician transitioning from biotech to the exciting world of SaaS development. With a proven track record, I've successfully grown multiple apps to over 1000 users. My experience includes two successful exits, demonstrating my knack for building and scaling impactful products. I'm excited to share my journey with you and help you navigate from concept to success!",
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEVQsmwa9FWIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687760384914?e=1749686400&v=beta&t=yyFLrZKmNHNZ4vSTSDBitx29GVv2_z0O48EiCG_pQgE'
    }
  ];
  
  return (
    <div className="relative min-h-screen pb-20 overflow-x-hidden">
      {/* Background particles */}
      <Particles quantity={30} className="pointer-events-none" />
      
      {/* Radial gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,255,255,0.05),transparent_50%)]"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero section */}
      <div className="pt-20 pb-16 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          From Code to Community
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          How helping fellow coders sparked a mission to bridge the gap between building and belonging.
        </motion.p>
      </div>
      
      {/* Mission section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-300 mb-4">
                At Vibelaunch, we know the high of shipping code. But we also know the uncertainty that follows. 
                Our mission is to empower vibe coders like you with the clarity and strategy needed to find your first users and build lasting momentum.
              </p>
              <p className="text-slate-300">
                We're demystifying growth for developers, turning the daunting task of user acquisition into a clear, actionable playbook, guiding you towards your first 1000 true fans.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Users className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Community</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">For Vibe Coders</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Award className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Clarity</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">From Build to Launch</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Strategy</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Actionable Playbooks</p>
              </div>
              <div className="frost-container p-5 md:p-6 bg-space-light/50 flex flex-col items-center justify-center">
                <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-neon mb-3" />
                <h3 className="text-lg md:text-xl font-semibold mb-1">Reach</h3>
                <p className="text-slate-400 text-xs md:text-sm text-center">Your First 1000 Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive timeline */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            From late-night coding sessions and forum help threads to building a dedicated launchpad for creators like you.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - only visible on desktop */}
          {!isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neon/30"></div>
          )}
          
          {/* Mobile timeline line - only visible on mobile */}
          {isMobile && (
            <div className="absolute left-12 top-0 h-full w-0.5 bg-neon/30"></div>
          )}
          
          {/* Timeline items */}
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className={cn(
                "relative mb-12",
                isMobile ? "pl-16" : index % 2 === 0 ? "text-right" : "text-left"
              )}
              initial={{ opacity: 0, x: isMobile ? -20 : (index % 2 === 0 ? 50 : -50) }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              {/* Desktop layout */}
              {!isMobile && (
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div className="frost-container p-6 bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300">
                      <h3 className="text-neon text-lg font-bold mb-2">{item.year}</h3>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-space border-2 border-neon flex items-center justify-center shadow-neon">
                      <span className="text-neon font-semibold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Updated Mobile layout - Number in the top-left corner */}
              {isMobile && (
                <div className="relative">
                  {/* Content card */}
                  <div className="frost-container relative pl-5 pr-5 pb-5 pt-5 bg-space-light/50 hover:border-neon/50 hover:shadow-neon-sm transition-all duration-300">
                    {/* Number indicator repositioned to top-left corner */}
                    <div className="absolute -top-4 -left-4 z-10">
                      <div className="h-8 w-8 rounded-full bg-space border-2 border-neon flex items-center justify-center shadow-neon-sm">
                        <span className="text-neon font-semibold">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Year and title */}
                    <h3 className="text-neon text-lg font-bold">{item.year}</h3>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Team section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet The Crew</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We've been in your shoes. We're coders and builders passionate about helping you find your audience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              className="frost-container p-6 text-center transition-all duration-300 border border-transparent hover:border-neon/50 hover:shadow-neon-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-neon/30 hover:border-neon transition-all duration-300">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-neon text-sm mb-3">{member.role}</p>
              <p className="text-sm text-slate-300 mt-4 text-left">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="container mx-auto px-4 mb-20">
        <div className="frost-container p-6 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your First 1000 Users?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Stop guessing, start growing. Get your personalized launch playbook with Vibelaunch.
          </p>
          <Button as="a" href="/" size="lg" glow>
            Get Started Today
          </Button>
        </div>
      </div>
      
      {/* FAQ Section */}
      <FAQ className="mb-20" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
