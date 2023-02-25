import React from "react";
import Card from "./Card"

const Board = () => {
    
    return (
        <div className="Board">
            <table>
                <tbody>
                    <tr>
                       <td> 
                        <Card title = "Listen to a mindfulness podcast" description = "Grounding yourself with podcasts and taking a break from your study session is a good way to calm those nerves and relax." image = "/src/assets/images/breathe.gif" alt = "Image of stones on a beach" link = "https://podcasts.apple.com/us/podcast/mindfulness-for-beginners/id1493806566" validate = "Check it out!"/> 
                        </td>
                        
                        <td>
                        <Card title = "Hydrate yourself" description = "Your body would thank you for taking care of its hydration needs. Get yourself an app to remind you periodically to get some water." image = "/src/assets/images/water.gif" alt = "refreshing glass of water with cucumber slices" link = "https://hydrocoach.com/" validate = "Track your hydration!"/>
                        </td>
                    </tr>
                       
                    <tr>
                    <td>
                        <Card title = "Watch your worrisome thoughts flow away" description = "pixelthought.co is a great website that animates how our negative worrisome thoughts are just a small pixel in the grand scheme of your life. Obviously, this does not minimize someone's mental health condition. It's just a creative way of seeing your negative thoughts fade away" image = "/src/assets/images/onestep.gif" alt = "a gif that tells one step at a time. a gif is an animated image that periodically repeats the content on it" link = "https://www.pixelthoughts.co/" validate = "Explore!"/>
                        </td>
                        
                        <td>
                        <Card title = "Listen to some relaxing music 🎧" description = "Music is known to be relaxing and provide soothing energy. Try tuning into some relaxing music for a break when you feel stressed from school work."  image = "src/assets/images/music.gif" alt = "an animated person in a teacup listening to music" link = "https://asoftmurmur.com/" validate = "Try it!"/>
                        </td>
                       </tr>


                    <tr>
                       <td> 
                        <Card title = "Create your own music!" description = "Immersing yourself in a creative activity can help relieve some of the stress that comes with being a college student." image = "src/assets/images/makemusic.gif" alt = "a team of animated characters playing piano and guitar" link = "https://musiclab.chromeexperiments.com/Song-Maker/" validate = "Create your tunes!"/> 
                        </td>
                        
                        <td> 
                        <Card title = "Weave some online silk!" description = "Check this interactive website out where you can draw silk patterns and immerse yourself in some creative breaks." image = "/src/assets/images/silk.jpg" alt = "a silk 3d pattern" link = "http://weavesilk.com/" validate = "Try it!"/> 
                        </td>

                       </tr>


                    <tr>
                       <td> 
                        <Card title = "Exercise or move yourself" description = "Move or exercise as much as your body is able to. Any sort of movement can help alleviate stress." image = "/src/assets/images/exercise.gif" alt = "an animated person moving hehe" link = "https://www.health.harvard.edu/staying-healthy/exercising-to-relax" validate = "Explore the benefits!"/> 
                        </td>
                        
                        <td>
                        <Card title = "Call a friend 📞" description = "You don't always have to go through things alone. Share some of your thoughts with your friends." image = "/src/assets/images/friends.gif" alt = "image of friends talking"/>
                        </td>
                       </tr>


                    <tr>
                       <td> 
                        <Card title = "Express gratitude" description = "Write down 5 things you are grateful for. They don't have to be big. You can write your favorite meal, air, etc."  image = "/src/assets/images/gratitude_2.jpg" alt ="a picture that says enjoy the little things. hope you smile!" link = ""/> 
                        </td>
                        
                        <td>
                        <Card title = "Be kind to yourself" description = "Give yourself the kindness you show others. <3" image = "/src/assets/images/kindness.gif" alt ="a gif that says be kind to yourself. just as an fyi, gif is an animated type of content that periodically repeats itself. hope you have a nice day!" link = ""/>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}
export default Board;
