import styled from "styled-components"

const About = () => {
    return (
        <Wrapper>
            <section className="center">
               <div className="title">
               <h2>about us</h2>
               <div className="underline"></div>
               </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a odio praesentium facilis perferendis iure rerum repellendus numquam dicta cupiditate dolorem soluta deserunt temporibus ducimus consequuntur ipsa esse similique eligendi officiis nemo voluptates, maiores quis? Consequuntur cumque natus fugiat illum, ut nemo possimus. Sit reiciendis id accusantium ea optio in.</p>
            </section>
        </Wrapper>
    )
}
const Wrapper =styled.div`
    padding-top: 2rem;
    h2 {
        margin: 0;
        margin-bottom: .5rem;
    }
    .center {
        width: 90vw;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
    }
    .underline {
        width: 5rem;
        height: 0.25rem;
        background: var(--primary-600);
        margin: 0 auto;
    }

`
export default About