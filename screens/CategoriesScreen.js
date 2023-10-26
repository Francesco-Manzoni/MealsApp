import { FlatList } from 'react-native';
import { CategoryGridTile } from '../Components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

export function CategoriesScreen({ navigation }) {
  function renderCategoryItem(item) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: item.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
