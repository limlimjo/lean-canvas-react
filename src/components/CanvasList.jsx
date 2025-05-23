import CanvasItem from './CanvasItem';

function CanvasList({ filteredItems, searchText, isGridView, onDeleteItem }) {
  /* 목록이 없을 때 / 검색 결과가 없을 때 */
  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600">
          {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
        </p>
      </div>
    );
  }
  return (
    <div
      className={`grid gap-6 ${isGridView ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
    >
      {filteredItems.map(item => (
        <CanvasItem
          key={item.id}
          id={item.id}
          title={item.title}
          lastModified={item.lastModified}
          category={item.category}
          onDelete={e => {
            e.preventDefault(); // 이벤트의 기본 동작을 막는 메서드
            //e.stopPropagation(); // 이벤트가 부모 요소로 전파되는 것을 막는 메서드
            onDeleteItem(item.id);
          }}
        />
      ))}
    </div>
  );
}

export default CanvasList;
