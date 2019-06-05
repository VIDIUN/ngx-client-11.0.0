/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadJobData } from './KalturaBulkUploadJobData';
/**
 * @record
 */
export function KalturaBulkUploadXmlJobDataArgs() { }
var KalturaBulkUploadXmlJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadXmlJobData, _super);
    function KalturaBulkUploadXmlJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadXmlJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadXmlJobData' }
        });
        return result;
    };
    return KalturaBulkUploadXmlJobData;
}(KalturaBulkUploadJobData));
export { KalturaBulkUploadXmlJobData };
typesMappingStorage['KalturaBulkUploadXmlJobData'] = KalturaBulkUploadXmlJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRYbWxKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFhtbEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFnQyxNQUFNLDRCQUE0QixDQUFDOzs7OztBQU9wRyxJQUFBO0lBQWlELHVEQUF3QjtJQUlyRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBNUJMO0VBU2lELHdCQUF3QixFQW9CeEUsQ0FBQTtBQXBCRCx1Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSwgS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZFhtbEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZFhtbEpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkWG1sSm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFhtbEpvYkRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkWG1sSm9iRGF0YSddID0gS2FsdHVyYUJ1bGtVcGxvYWRYbWxKb2JEYXRhOyJdfQ==