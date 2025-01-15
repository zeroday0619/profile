import SVG from "@/components/Logos";


export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse mx-10 max-w-full">
          <img
            src="/images/profile.jpg"
            className="max-w-sm rounded-lg shadow-2xl ml-12"/>
          <div>
            <h1 className="text-5xl font-bold">Euiseo Cha</h1>
            <div className="py-6 text-lg" style={{wordBreak: 'keep-all'}}>
              <p className="mb-2">오픈소스 커뮤니티에 대한 깊은 열정으로 활동하고 있는 저는 Ubuntu Members로서 Ubuntu Community에 적극적으로 기여하려고 노력하고 있습니다.</p>
              <p className="mb-2">또한 Ubuntu Korea LoCo Community의 포럼 모더레이터로서 활동며 적극적으로 오픈소스 커뮤니티에 기여를 하고 있습니다.</p>
              <p className="mb-2">GitHub 등 코드 협업 플랫폼을 통해 다양한 오픈소스 프로젝트에 참여하여 코드 기여를 통해 오픈소스 생태계 발전에 힘을 보태고 있습니다.</p>
              <p className="mb-2">함께 성장하고 배우는 경험을 나누는 것을 즐기는 저는 어떤 프로젝트든 열정적으로 협력하여 완성해 나가는 개발자입니다.</p>
              <p className="mb-2">궁극적으로 컴퓨터 과학과 가속 컴퓨팅 분야에서 지속적인 성장을 이루고 싶으며, 이러한 목표를 향해 끊임없이 노력하고 있습니다.</p>
            </div>
            <div className="flex justify-center items-center gap-4 space-x-6">
              <a href="https://github.com/zeroday0619" className=" text-blue-400"><SVG logo="github" width={"42"} height={"42"}/></a>
              <a href="https://linkedin.com/in/euiseo-cha" className=" text-white"><SVG logo="linkedin" width={"42"} height={"42"}/></a>
              <a href="mailto:euiseo.cha@gmail.com" className=" text-blue-400"><SVG logo="mail" width={"42"} height={"42"}/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
