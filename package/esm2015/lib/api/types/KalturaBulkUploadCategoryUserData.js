/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectData } from './KalturaBulkUploadObjectData';
/**
 * @record
 */
export function KalturaBulkUploadCategoryUserDataArgs() { }
export class KalturaBulkUploadCategoryUserData extends KalturaBulkUploadObjectData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadCategoryUserData' }
        });
        return result;
    }
}
typesMappingStorage['KalturaBulkUploadCategoryUserData'] = KalturaBulkUploadCategoryUserData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQW1DLE1BQU0sK0JBQStCLENBQUM7Ozs7O0FBTzdHLE1BQU0sd0NBQXlDLFNBQVEsMkJBQTJCOzs7O0lBSTlFLFlBQVksSUFBNkM7UUFFckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjtBQUVELG1CQUFtQixDQUFDLG1DQUFtQyxDQUFDLEdBQUcsaUNBQWlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhLCBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhQXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YSBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YSB7XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkQ2F0ZWdvcnlVc2VyRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRDYXRlZ29yeVVzZXJEYXRhJ10gPSBLYWx0dXJhQnVsa1VwbG9hZENhdGVnb3J5VXNlckRhdGE7Il19