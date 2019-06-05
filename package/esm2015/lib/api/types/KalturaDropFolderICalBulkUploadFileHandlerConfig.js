/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventType } from './KalturaScheduleEventType';
import { KalturaDropFolderFileHandlerConfig } from './KalturaDropFolderFileHandlerConfig';
/**
 * @record
 */
export function KalturaDropFolderICalBulkUploadFileHandlerConfigArgs() { }
/** @type {?|undefined} */
KalturaDropFolderICalBulkUploadFileHandlerConfigArgs.prototype.eventsType;
export class KalturaDropFolderICalBulkUploadFileHandlerConfig extends KalturaDropFolderFileHandlerConfig {
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
            objectType: { type: 'c', default: 'KalturaDropFolderICalBulkUploadFileHandlerConfig' },
            eventsType: { type: 'en', subTypeConstructor: KalturaScheduleEventType, subType: 'KalturaScheduleEventType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDropFolderICalBulkUploadFileHandlerConfig.prototype.eventsType;
}
typesMappingStorage['KalturaDropFolderICalBulkUploadFileHandlerConfig'] = KalturaDropFolderICalBulkUploadFileHandlerConfig;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURyb3BGb2xkZXJJQ2FsQnVsa1VwbG9hZEZpbGVIYW5kbGVyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFPbEksTUFBTSx1REFBd0QsU0FBUSxrQ0FBa0M7Ozs7SUFJcEcsWUFBWSxJQUE0RDtRQUVwRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsa0RBQWtELEVBQUU7WUFDckcsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7U0FDeEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLGtEQUFrRCxDQUFDLEdBQUcsZ0RBQWdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZywgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZ0FyZ3MgfSBmcm9tICcuL0thbHR1cmFEcm9wRm9sZGVyRmlsZUhhbmRsZXJDb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEcm9wRm9sZGVySUNhbEJ1bGtVcGxvYWRGaWxlSGFuZGxlckNvbmZpZ0FyZ3MgIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlSGFuZGxlckNvbmZpZ0FyZ3Mge1xuICAgIGV2ZW50c1R5cGU/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWcgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVIYW5kbGVyQ29uZmlnIHtcblxuICAgIGV2ZW50c1R5cGUgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFEcm9wRm9sZGVySUNhbEJ1bGtVcGxvYWRGaWxlSGFuZGxlckNvbmZpZ0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWcnIH0sXG5cdFx0XHRcdGV2ZW50c1R5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRUeXBlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRHJvcEZvbGRlcklDYWxCdWxrVXBsb2FkRmlsZUhhbmRsZXJDb25maWcnXSA9IEthbHR1cmFEcm9wRm9sZGVySUNhbEJ1bGtVcGxvYWRGaWxlSGFuZGxlckNvbmZpZzsiXX0=