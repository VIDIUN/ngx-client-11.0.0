/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperator } from './KalturaSearchOperator';
/**
 * @record
 */
export function KalturaMetadataSearchItemArgs() { }
/** @type {?|undefined} */
KalturaMetadataSearchItemArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaMetadataSearchItemArgs.prototype.orderBy;
export class KalturaMetadataSearchItem extends KalturaSearchOperator {
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
            objectType: { type: 'c', default: 'KalturaMetadataSearchItem' },
            metadataProfileId: { type: 'n' },
            orderBy: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMetadataSearchItem.prototype.metadataProfileId;
    /** @type {?} */
    KalturaMetadataSearchItem.prototype.orderBy;
}
typesMappingStorage['KalturaMetadataSearchItem'] = KalturaMetadataSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLE1BQU0sZ0NBQWlDLFNBQVEscUJBQXFCOzs7O0lBS2hFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2YsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMkJBQTJCLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoT3BlcmF0b3IsIEthbHR1cmFTZWFyY2hPcGVyYXRvckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hPcGVyYXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaE9wZXJhdG9yQXJncyB7XG4gICAgbWV0YWRhdGFQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRvcmRlckJ5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbSBleHRlbmRzIEthbHR1cmFTZWFyY2hPcGVyYXRvciB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0b3JkZXJCeSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1ldGFkYXRhU2VhcmNoSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhTWV0YWRhdGFTZWFyY2hJdGVtJyB9LFxuXHRcdFx0XHRtZXRhZGF0YVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRvcmRlckJ5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNZXRhZGF0YVNlYXJjaEl0ZW0nXSA9IEthbHR1cmFNZXRhZGF0YVNlYXJjaEl0ZW07Il19