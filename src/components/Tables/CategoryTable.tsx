import React, { useEffect, useState } from 'react';
import { useCategoryQuery } from '../../api/fetch';
import { Category } from '../../types/package';
import {
  useCategoriesMutation,
  useEditCategoryMutation,
} from '../../api/postToken';

const CategoryTable = () => {
  const { data, refetch } = useCategoryQuery();
  const [inputValue, setInputValue] = useState('');
  const [editingItem, setEditingItem] = useState<Category | null>(null);
  const [enabled, setEnabled] = useState<boolean>(true);
  const category = data?.categories || [];

  const [categories, { isLoading }] = useCategoriesMutation();

  const [editcategories, { isLoading: loading }] = useEditCategoryMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddCategory = () => {
    if (inputValue.trim() === '') return;

    setTimeout(async () => {
      console.log(`New category added: ${inputValue}`);
      await categories({ name: inputValue, visibility: enabled })
        .unwrap()
        .then((data) => {
          refetch();
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });

      setInputValue('');
    }, 1000);
  };

  const handleEditCategory = async () => {
    if (inputValue.trim() === '') return;
    if (!editingItem) return;

    console.log(`Category Edited: ${inputValue}`);
    await editcategories({
      id: editingItem?.id,
      name: inputValue,
      visibility: enabled,
    })
      .unwrap()
      .then((data) => {
        refetch();
        console.log(data);
        setEditingItem(null);
      })
      .catch((err) => {
        console.log(err);
      });

    setInputValue('');
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleEdit = (id: string) => {
    const itemToEdit = category.find((item: any) => item.id === id);
    setEditingItem(itemToEdit);
    setInputValue(itemToEdit.name);
  };

  useEffect(() => {
    if (editingItem?.visibility) {
      setEnabled(editingItem?.visibility);
    }
  }, [editingItem]);

  return (
    <div className="flex gap-6 md:flex-row flex-col">
      <div className="rounded-sm border md:w-[65%] w-full border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[50px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  S/N
                </th>
                <th className="min-w-[250px] py-4 px-4 font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="min-w-[100px] py-4 px-4 font-medium text-black dark:text-white">
                  Visibility
                </th>
                <th className="min-w-[200px] py-4 px-4 font-medium text-black dark:text-white">
                  Created Date
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {category.map((packageItem: any, key: number) => {
                return (
                  <tr key={key}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark">
                      <p className="text-sm">{key + 1}</p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {packageItem.name}
                      </p>
                    </td>

                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                          packageItem.visibility
                            ? 'bg-success text-success'
                            : 'bg-warning text-warning'
                        }`}
                      >
                        {packageItem.visibility ? 'Yes' : 'No'}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-sm">
                        {new Date(packageItem?.createdAt).toLocaleString(
                          'en-US',
                          {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                          },
                        )}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        <button
                          className="hover:text-primary"
                          onClick={() => handleEdit(packageItem.id)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-sm h-fit border md:w-[30%] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b flex justify-between items-center border-stroke py-4 px-6.5 dark:border-strokedark">
          {editingItem ? (
            <>
              <h3 className="font-medium text-black dark:text-white">
                Edit Category
              </h3>
              <button
                type="button"
                onClick={() => {
                  setEditingItem(null);
                  setInputValue('');
                }}
                className={`flex px-4 justify-center rounded p-3 bg-[#d50e3c] font-medium text-white`}
              >
                Add New
              </button>
            </>
          ) : (
            <h3 className="font-medium text-black dark:text-white">
              Add New Category
            </h3>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editingItem ? handleEditCategory() : handleAddCategory();
          }}
        >
          <div className="p-6.5">
            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Name <span className="text-meta-1">*</span>
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="E.g Age | Country | Booster"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white"
              />
            </div>

            <div className="flex justify-between py-4">
              <p>Visibility :</p>
              <div>
                <label
                  htmlFor="toggle1"
                  className="flex cursor-pointer select-none items-center"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="toggle1"
                      className="sr-only"
                      onChange={() => {
                        setEnabled(!enabled);
                      }}
                    />
                    <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
                    <div
                      className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                        enabled &&
                        '!right-1 !translate-x-full !bg-[#d50e3c] dark:!bg-white'
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
            {editingItem ? (
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className={`flex px-4 justify-center rounded p-3 font-medium text-white ${
                    inputValue.trim() === '' || loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#d50e3c] hover:bg-opacity-90'
                  }`}
                  disabled={inputValue.trim() === '' || loading}
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className={`flex px-4 justify-center rounded p-3 font-medium text-white ${
                    inputValue.trim() === '' || isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#d50e3c] hover:bg-opacity-90'
                  }`}
                  disabled={inputValue.trim() === '' || isLoading}
                >
                  {isLoading ? 'Adding...' : 'Add Category'}
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex px-4 justify-center rounded bg-[#d6d6d6] p-3 font-medium text-gray-700 hover:bg-opacity-90"
                >
                  Clear
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryTable;
