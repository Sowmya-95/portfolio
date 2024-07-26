import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Link } from "gatsby"

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    color: var(--green);

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['JavaScript', 'Python', 'CSS3', , 'Pandas', 'HTML5', 'TesnsorFlow', 'Vue', 'SQL', 'TailwindCSS', 'Numpy', 'Angular', 'PyTorch', 'React', 'Hugging Face', 'Typescript', 'PocketBase', 'PHP', 'LangChain'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            {/* <p>
              Hello! My name is Sowmya Kamath Ramesh. I received my Bachelor of Engineering in Computer Science(2012–2016) from the&nbsp;
              <a href="https://nieit.ac.in/" target="_blank" rel="noreferrer"> National Institute of Engineering Institute of Technology, India</a> with an <Link to="/Degreecertificate.pdf">2.3 GPA</Link>.

            </p>

            <p>
              Fast-forward to today,{' '}
              I am in fifth semester, pursuing master thesis at the <a href="https://www.uni-paderborn.de/" target="_blank" rel="noreferrer">
                Universität Paderborn. &nbsp;
              </a>
              My interest in data science started when I first learnt that our brain can be mimcked just using data. Thereafter my quest begin to learn about
              machine learning and Deep learning.

            </p>

            <p>
              Completed courses on Machine learning, Data Science in Physics and Engineering, Data Science in Industrial applications, Planning and Heuristic search, Computational Argumentation and Knowledge Graphs and Software Engineering with <Link to="/new_transcriptrecord.pdf">2.7 GPA</Link>.
            </p> */}
            <p>🎓 <b>Graduation Alert!</b>, Master of Machine Learning, Deep Learning, and NLP wizardry from <a href="https://www.uni-paderborn.de/" target="_blank" rel="noreferrer">
              Universität Paderborn
            </a>, diving deep into the realms of AI with a passion for uncovering the secrets of language and cognition. By day, I unravel the mysteries of neural networks; by night, I transform visions into reality as a frontend developer—a role I first explored and loved at a <a href="https://jobooking.de/" target="_blank" rel="noreferrer">startup</a>, marking my debut in the tech scene.</p>

            <p>🚀 <b>Tech Enthusiast & Code Whisperer</b>: My journey through academia and the startup world has equipped me with a unique blend of skills, from teaching machines to understand human language to crafting beautiful, user-friendly interfaces. I thrive on the thrill of solving complex problems, whether they're about analyzing vast datasets or ensuring a seamless user experience.</p>

            <p>💡<b> Looking Forward</b>: As I stand on the brink of completing my master's degree, I'm eager to fuse my knowledge of AI with my frontend development prowess, tackling new challenges and pushing the boundaries of what's possible. I'm equally passionate about both fields, dreaming big and ready to make an impact where technology meets human creativity.</p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
