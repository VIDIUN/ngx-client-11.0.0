/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSftpDropFolder } from './KalturaSftpDropFolder';
/**
 * @record
 */
export function KalturaTrRdsDropFolderArgs() { }
/** @type {?|undefined} */
KalturaTrRdsDropFolderArgs.prototype.syncMetadataProfile;
/** @type {?|undefined} */
KalturaTrRdsDropFolderArgs.prototype.targetMetadataProfile;
export class KalturaTrRdsDropFolder extends KalturaSftpDropFolder {
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
            objectType: { type: 'c', default: 'KalturaTrRdsDropFolder' },
            syncMetadataProfile: { type: 'n' },
            targetMetadataProfile: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaTrRdsDropFolder.prototype.syncMetadataProfile;
    /** @type {?} */
    KalturaTrRdsDropFolder.prototype.targetMetadataProfile;
}
typesMappingStorage['KalturaTrRdsDropFolder'] = KalturaTrRdsDropFolder;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVRyUmRzRHJvcEZvbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVRyUmRzRHJvcEZvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLE1BQU0sNkJBQThCLFNBQVEscUJBQXFCOzs7O0lBSzdELFlBQVksSUFBa0M7UUFFMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzNFLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDN0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2Z0cERyb3BGb2xkZXIsIEthbHR1cmFTZnRwRHJvcEZvbGRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZnRwRHJvcEZvbGRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVRyUmRzRHJvcEZvbGRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNmdHBEcm9wRm9sZGVyQXJncyB7XG4gICAgc3luY01ldGFkYXRhUHJvZmlsZT8gOiBudW1iZXI7XG5cdHRhcmdldE1ldGFkYXRhUHJvZmlsZT8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFUclJkc0Ryb3BGb2xkZXIgZXh0ZW5kcyBLYWx0dXJhU2Z0cERyb3BGb2xkZXIge1xuXG4gICAgc3luY01ldGFkYXRhUHJvZmlsZSA6IG51bWJlcjtcblx0dGFyZ2V0TWV0YWRhdGFQcm9maWxlIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhVHJSZHNEcm9wRm9sZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFUclJkc0Ryb3BGb2xkZXInIH0sXG5cdFx0XHRcdHN5bmNNZXRhZGF0YVByb2ZpbGUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dGFyZ2V0TWV0YWRhdGFQcm9maWxlIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFUclJkc0Ryb3BGb2xkZXInXSA9IEthbHR1cmFUclJkc0Ryb3BGb2xkZXI7Il19