const Team =() =>{
    return (
<section id="our-team" className="bg-gray-100 py-32">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Team Member 1 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/1.jpg" alt="Team Member 1" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-700">Role: Software Engineer</p>
            </div>

            {/* <!-- Team Member 2 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/4.jpg" alt="Team Member 2" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-700">Role: Graphic Designer</p>
            </div>

            {/* <!-- Team Member 3 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/3.jpg" alt="Team Member 3" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                <p className="text-gray-700">Role: Marketing Manager</p>
            </div>

            {/* <!-- Team Member 4 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/2.jpg" alt="Team Member 4" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
                <p className="text-gray-700">Role: Seo specialist</p>
            </div>

            {/* <!-- Team Member 5 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/5.jpg" alt="Team Member 5" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
                <p className="text-gray-700">Role: UX Designer</p>
            </div>

            {/* <!-- Team Member 6 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/6.jpg" alt="Team Member 6" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
                <p className="text-gray-700">Role: Frontend Developer</p>
            </div>

            {/* <!-- Team Member 7 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/7.jpg" alt="Team Member 7" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                <p className="text-gray-700">Role: Content Writer</p>
            </div>

            {/* <!-- Team Member 8 --> */}
            <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                <img src="https://spacema-dev.com/elevate/assets/images/team/8.jpg" alt="Team Member 8" className="w-full rounded-full mb-4" />
                <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
                <p className="text-gray-700">Role: Project Manager</p>
            </div>
        </div>
    </div>
</section>
    )
}
export default Team;