import { Html, useProgress } from "@react-three/drei"

const Loader = () => {
    const { progress } = useProgress();

    return (
        <Html><span className="canvas-laod"></span>
            <p style={{
                fontSize: 14,
                color: '#f1f1f1', fontweight: 800, marginTop: 40
            }} className="">{progress.toFixed(2)}%</p></Html>
    )
}
// loader component is used for percentage loader(1 to 100) , after we can see 3D image

export default Loader