/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaExecuteMetadataXsltObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.metadataObjectType;
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.xslt;
var KalturaExecuteMetadataXsltObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaExecuteMetadataXsltObjectTask, _super);
    function KalturaExecuteMetadataXsltObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaExecuteMetadataXsltObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaExecuteMetadataXsltObjectTask' },
            metadataProfileId: { type: 'n' },
            metadataObjectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            xslt: { type: 's' }
        });
        return result;
    };
    return KalturaExecuteMetadataXsltObjectTask;
}(KalturaObjectTask));
export { KalturaExecuteMetadataXsltObjectTask };
if (false) {
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.metadataProfileId;
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.metadataObjectType;
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.xslt;
}
typesMappingStorage['KalturaExecuteMetadataXsltObjectTask'] = KalturaExecuteMetadataXsltObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXhlY3V0ZU1ldGFkYXRhWHNsdE9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7OztBQVMvRSxJQUFBO0lBQTBELGdFQUFpQjtJQU12RSw4Q0FBWSxJQUFnRDtlQUV4RCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLDJEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3pGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzNILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQXBDTDtFQVkwRCxpQkFBaUIsRUF5QjFFLENBQUE7QUF6QkQsZ0RBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdFRhc2ssIEthbHR1cmFPYmplY3RUYXNrQXJncyB9IGZyb20gJy4vS2FsdHVyYU9iamVjdFRhc2snO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFeGVjdXRlTWV0YWRhdGFYc2x0T2JqZWN0VGFza0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2tBcmdzIHtcbiAgICBtZXRhZGF0YVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZT8gOiBLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlO1xuXHR4c2x0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2sge1xuXG4gICAgbWV0YWRhdGFQcm9maWxlSWQgOiBudW1iZXI7XG5cdG1ldGFkYXRhT2JqZWN0VHlwZSA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdHhzbHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFeGVjdXRlTWV0YWRhdGFYc2x0T2JqZWN0VGFza0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRXhlY3V0ZU1ldGFkYXRhWHNsdE9iamVjdFRhc2snIH0sXG5cdFx0XHRcdG1ldGFkYXRhUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1ldGFkYXRhT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0eHNsdCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRXhlY3V0ZU1ldGFkYXRhWHNsdE9iamVjdFRhc2snXSA9IEthbHR1cmFFeGVjdXRlTWV0YWRhdGFYc2x0T2JqZWN0VGFzazsiXX0=