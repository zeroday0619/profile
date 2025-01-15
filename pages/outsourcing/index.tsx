export default function Outsourcing() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse mx-10 max-w-full">
                    <div>
                        <h1 className="text-5xl font-bold">외주 서비스 | Outsourcing services</h1>
                        <div className="py-6 text-lg" style={{wordBreak: 'keep-all'}}>
                        <p className="mb-2">저는 Python 프로그래밍 언어를 전문으로 하는 개발자로, 고객의 개별적인 요구에 맞춤형 솔루션을 제공합니다.</p>
                        <p className="mb-2">고객의 성공적인 프로젝트 진행을 최우선으로 생각하며, 직접 소통하여 이해하고 협력하는 과정을 통해 만족스러운 결과를 만들어가기 위해 최선을 다합니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-auto shadow-xl">
                <figure>
                    <img
                    src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                    alt="FastAPI" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">FastAPI 서비스</h2>
                    <p>FastAPI 프레임워크를 사용한 RESTFull API를 제작해드립니다.</p>
                    <div className="card-actions justify-end">
                    <a href="https://open.kakao.com/o/ske9NHah" className="btn btn-primary">상담</a>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 image-full w-auto shadow-xl">
                <figure>
                    <img
                    src="/images/code.webp"
                    alt="code"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">대학교 프로그래밍 과제 대행 서비스</h2>
                    <p>Python, C, C++, JAVA등 다양한 언어를 사용한 프로그래밍 과제를 대행 해드립니다.</p>
                    <div className="card-actions justify-end">
                    <a href="https://open.kakao.com/o/ske9NHah" className="btn btn-primary">상담</a>
                    </div>
                </div>
            </div>
        </>
    );
}