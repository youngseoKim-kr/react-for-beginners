// url에서 id값을 가져오기 위해 useparams를 이용
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
