/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaCsvAdditionalFieldInfo } from './KalturaCsvAdditionalFieldInfo';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaUsersCsvJobDataArgs() { }
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.filter;
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.additionalFields;
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.userName;
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.userMail;
/** @type {?|undefined} */
KalturaUsersCsvJobDataArgs.prototype.outputPath;
var KalturaUsersCsvJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaUsersCsvJobData, _super);
    function KalturaUsersCsvJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.additionalFields === 'undefined')
            _this.additionalFields = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaUsersCsvJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaUsersCsvJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaUserFilter, subType: 'KalturaUserFilter' },
            metadataProfileId: { type: 'n' },
            additionalFields: { type: 'a', subTypeConstructor: KalturaCsvAdditionalFieldInfo, subType: 'KalturaCsvAdditionalFieldInfo' },
            userName: { type: 's' },
            userMail: { type: 's' },
            outputPath: { type: 's' }
        });
        return result;
    };
    return KalturaUsersCsvJobData;
}(KalturaJobData));
export { KalturaUsersCsvJobData };
if (false) {
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.filter;
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.metadataProfileId;
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.additionalFields;
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.userName;
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.userMail;
    /** @type {?} */
    KalturaUsersCsvJobData.prototype.outputPath;
}
typesMappingStorage['KalturaUsersCsvJobData'] = KalturaUsersCsvJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJzQ3N2Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVVzZXJzQ3N2Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVl0RSxJQUFBO0lBQTRDLGtEQUFjO0lBU3RELGdDQUFZLElBQWtDO1FBQTlDLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDOztLQUNoRjs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1lBQzlGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2hJLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7aUNBL0NMO0VBZ0I0QyxjQUFjLEVBZ0N6RCxDQUFBO0FBaENELGtDQWdDQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVVzZXJGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUNzdkFkZGl0aW9uYWxGaWVsZEluZm8gfSBmcm9tICcuL0thbHR1cmFDc3ZBZGRpdGlvbmFsRmllbGRJbmZvJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlcnNDc3ZKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhVXNlckZpbHRlcjtcblx0bWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRhZGRpdGlvbmFsRmllbGRzPyA6IEthbHR1cmFDc3ZBZGRpdGlvbmFsRmllbGRJbmZvW107XG5cdHVzZXJOYW1lPyA6IHN0cmluZztcblx0dXNlck1haWw/IDogc3RyaW5nO1xuXHRvdXRwdXRQYXRoPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVVzZXJzQ3N2Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFVc2VyRmlsdGVyO1xuXHRtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0YWRkaXRpb25hbEZpZWxkcyA6IEthbHR1cmFDc3ZBZGRpdGlvbmFsRmllbGRJbmZvW107XG5cdHVzZXJOYW1lIDogc3RyaW5nO1xuXHR1c2VyTWFpbCA6IHN0cmluZztcblx0b3V0cHV0UGF0aCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVzZXJzQ3N2Sm9iRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmFkZGl0aW9uYWxGaWVsZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmFkZGl0aW9uYWxGaWVsZHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVXNlcnNDc3ZKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRmlsdGVyJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhZGRpdGlvbmFsRmllbGRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3N2QWRkaXRpb25hbEZpZWxkSW5mbywgc3ViVHlwZSA6ICdLYWx0dXJhQ3N2QWRkaXRpb25hbEZpZWxkSW5mbycgfSxcblx0XHRcdFx0dXNlck5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dXNlck1haWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b3V0cHV0UGF0aCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVXNlcnNDc3ZKb2JEYXRhJ10gPSBLYWx0dXJhVXNlcnNDc3ZKb2JEYXRhOyJdfQ==