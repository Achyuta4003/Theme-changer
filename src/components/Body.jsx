import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Body = () => {
    const { currentTheme } = useContext(ThemeContext)

    return (
        <div className='Body' style={{ ...currentTheme, borderColor: currentTheme.color }} >
            <h1>Welcome to The Theme Changer</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sequi dolorem consequatur illum, sunt, suscipit in tempora cumque fugiat sed, beatae ut facilis alias. Aliquid culpa iste alias numquam autem, temporibus quaerat pariatur id nostrum molestiae ab cumque delectus minus sit, distinctio quos voluptate? Sunt accusamus necessitatibus labore, debitis omnis similique iste hic deserunt, nobis sapiente tempore quod ab nesciunt nemo recusandae sint ipsam laborum, earum dignissimos explicabo quasi commodi suscipit incidunt? Asperiores cum harum amet dolorem laboriosam alias soluta quo eveniet itaque, ad, expedita fugit atque eaque dicta? Veritatis harum officiis quas neque impedit omnis expedita. Et repellat libero esse dignissimos repudiandae porro non possimus temporibus, vel laboriosam dolorem numquam maiores excepturi officiis voluptatibus necessitatibus labore iste consequuntur. Soluta pariatur animi facere hic laudantium quaerat alias adipisci et. Hic, consectetur delectus ex eligendi molestiae fugit in suscipit neque voluptate explicabo, doloremque exercitationem aliquam esse? Nesciunt porro quo ipsum vitae ipsam asperiores. Consequatur corporis
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perferendis itaque, quaerat cupiditate ut nam, non placeat quidem quos officia hic deleniti nobis inventore. Quasi delectus iste error dolore inventore amet repudiandae vero ex, minima sunt minus eveniet, commodi sequi, magni quis laboriosam iusto suscipit. Accusamus placeat quod deleniti eius.
                libero odit. Laudantium enim officiis eum soluta, illum qui nemo iusto sit. Fuga exercitationem deserunt illum porro, reiciendis minus laudantium tempore repellat eaque, libero quo atque dolores assumenda in voluptates inventore labore necessitatibus? Sit pariatur voluptatibus quia aspernatur culpa voluptate perspiciatis quasi odio facilis? Labore at perspiciatis dolor temporibus. Voluptate assumenda doloribus ipsa ea quo eum esse? Nisi assumenda nobis architecto aliquam fuga? Officiis ipsum est optio numquam nemo! Unde repellat animi nemo, laudantium eum labore, illo deleniti, culpa doloribus laborum in amet et delectus nesciunt maiores totam inventore perferendis accusantium corrupti nobis cum. Corporis ullam maxime suscipit nemo, distinctio earum sunt accusantium harum sapiente eos, minima unde eius dolor magnam, soluta quidem nesciunt eligendi accusamus? Dolorum porro est expedita odit, totam ipsum similique nesciunt. Quia et tempore, corrupti fugiat in suscipit odio voluptatibus dignissimos! Dolorum laboriosam incidunt suscipit aliquid. Veniam, a omnis similique commodi officiis dolorum alias, aperiam quod ducimus amet esse vero ab ea. Suscipit, tempore eaque non odio odit perspiciatis, quod qui provident nam natus unde itaque exercitationem. Animi eius ipsam atque labore, nesciunt perferendis voluptatem facere veniam odit maiores quia sit nisi perspiciatis alias veritatis soluta tempore omnis numquam suscipit ipsum. Officiis, animi sequi placeat incidunt mollitia nesciunt fugiat atque eum provident?
                lorem360
            </p>
        </div>
    )
}

export default Body
