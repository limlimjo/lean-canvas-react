import { canvases } from './http';

// 목록
export function getCanvases() {
  return canvases.get('/');
}

// 저장, 수정, 삭제
