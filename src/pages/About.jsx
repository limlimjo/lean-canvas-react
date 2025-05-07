import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Button from '../components/Button';

function About() {
  const queryClient = useQueryClient();
  // 데이터를 효율적으로 가져오기 위해 useQuery 사용
  const { isLoading, error, data } = useQuery({
    queryKey: ['canvases'],
    queryFn: () =>
      axios.get('http://localhost:8000/canvases/').then(res => res.data),
    initialData: [],
  });

  // 데이터를 효율적으로 추가하기 위해 useMutation 사용
  const { mutate: createNewCanvas, isLoading: isLoadingCreate } = useMutation({
    mutationFn: newCanvas =>
      axios.post('http://localhost:8000/canvases/', newCanvas),
    onSuccess: () => {
      // invalidateQueries는 캐시된 데이터를 무효화하고 refetch를 트리거
      queryClient.invalidateQueries(['canvases']);
    },
  });

  const handleCreate = () => {
    createNewCanvas({
      title: 'New Canvas',
    });
  };

  return (
    <div>
      <h2 className="text-3xl">useQuery</h2>
      {isLoading && <p>...Loading</p>}
      {error && <p className="text-red-700">{error.message}</p>}
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}

      <h2 className="text-3xl">useMutation</h2>
      {isLoadingCreate && <p>...Loading</p>}
      <Button onClick={handleCreate}>등록</Button>
    </div>
  );
}

export default About;
